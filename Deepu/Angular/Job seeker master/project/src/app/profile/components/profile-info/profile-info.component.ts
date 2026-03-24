import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Experience, skill } from '../../models/profile';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  providers: [DatePipe],
})
export class ProfileInfoComponent implements OnInit {
  resumeFile: any;
  user: any;
  isEditMode = false;
  isEditMode2 = false;
  isEditMode3 = false;
  isDescriptionEditMode = false;
  skillSection: any = '';
  dropDownData: any;
  errorMessage: any;
  addedSkill: skill[] = [];
  inputValue: string = '';
  qualificationForm: FormGroup;
  experienceForm!: FormGroup;
  experienceRef!: Experience;
  qualification:any[]=[];
  profileId :any;
  experience:any[]=[];
  profile:any[]=[];
  constructor(private authService: AuthService,
     private profileService: ProfileService,
      private fb: FormBuilder,  
      private datePipe: DatePipe,
       private route: Router,
       private router: ActivatedRoute) {

    this.qualificationForm = this.fb.group({
      qualificationName: ['', Validators.required], // Example form control with validation
      description: ['', Validators.required]

    });
    this.experienceForm = this.fb.group({
      jobTitle: ['', Validators.required],
      companyName: ['', Validators.required],
      summary: ['', Validators.required],
      serviceStart: [null, Validators.required], // Provide a default date or set it to null
      serviceEnd: [null, Validators.required],   // Provide a default date or set it to null
    });
    
    this.formatDate = this.formatDate.bind(this);
  }
  ngOnInit() {
    const user: any = sessionStorage.getItem('jobSeekerId');
    const pid: any = sessionStorage.getItem('profileId');
     console.log(pid);
    this.authService.getUserProfileById(user).subscribe((data: any[]) => {
      this.user = data[0];
      console.log(this.user[0].firstName)
      
console.log(this.resumeFile);
    })
    this.getSkill();
    this.getProfileId();
    this.getQualification();
    // this.getExperience();
    this.getSkillByUser();
    this.getExperience(this.profileId);
     this.getProfile();
  }
  
  formatDate(date: any): string {
    // Adjust the format according to the server's expectations
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  toggleDescriptionEditMode() {
    this.isDescriptionEditMode = !this.isDescriptionEditMode;
  }
  updateProfile(form: NgForm) {
    // alert(form.value.skillSection);  
    const skillId = form.value.skillSection
    const skillsId = [skillId];
    this.getProfileId();
   
    this.profileService.addSkill(skillsId,this.profileId).subscribe(response => {
      console.log(response.status) 
      this.getSkill();  // Call getSkill only after addSkill is successful
      console.log(this.getSkill);
      this.isEditMode = false;
    },
      (error: HttpErrorResponse) => {
        console.error('Error occurred:', error);
        console.log('Status:', error.status); // Access the status code
        if (error.status !== 200) {
          this.errorMessage = "already added";
        }
        else {
          this.route.navigate(['jobseeker-home/profile-info'])
        }
       
      });
    this.isEditMode = false;
  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
  toggleEditMode2() {
    this.isEditMode2 = !this.isEditMode2;
  }
  toggleEditMode3() {
    this.isEditMode3 = !this.isEditMode3;
  }
  getSkill() {
    this.profileService.getAllSkill().subscribe(response => {
      console.log(response);
      this.dropDownData = response;
    })
  }
  getSkillByUser() {
    this.profileService.getSkillByUser(this.profileId).subscribe(response => {
      // console.log("skills"+response);
      this.addedSkill = response;
      console.log(this.addedSkill[0]);
    })
  }

  addQualification() {
    if (this.qualificationForm.valid) {
      const formValues = this.qualificationForm.value; // Access form values
      // Do something with the form values (e.g., send to server)

      let name = formValues.qualificationName;
      let description = formValues.description;
      this.profileService.addQualification(name, description,this.profileId).subscribe(response => {
        console.log(response);
        this.getQualification()
      })
      // Reset the form after submission (optional)
      this.qualificationForm.reset();     
    }
    this.isEditMode = false;
  }
  getQualification(){
    this.profileService.getQualification(this.profileId).subscribe(response=>{
        this.qualification=response;
        console.log(response);
    })
  }
  addExperience() {
    if (this.experienceForm.valid) {
      const formValues = this.experienceForm.value;

      const experience = {
        jobTitle: formValues.jobTitle,
        companyName: formValues.companyName,
        summary: formValues.summary,
        serviceStart: this.formatDate(formValues.serviceStart),
        serviceEnd: this.formatDate(formValues.serviceEnd),
      };

      this.profileService.addExperience(experience, this.profileId).subscribe((response) => {
        console.log(response);
        this.experienceForm.reset();
        this.isEditMode3 = false;
        this.getExperience(this.profileId)
      });
    }
  }
  
 getProfileId(){
    this.router.params.subscribe(params => {
      this.profileId = params['id']; // Access the 'id' parameter
     
    });
  }
  getExperience(profileId: any) {
    this.profileService.getExperience(profileId).subscribe(
      (data:any[])=> {
        console.log('Experience data:', data[0].jobTitle);      
          this.experience = data; // Update the user property
          console.log('User data:', this.user);
      },
      (error) => {
        console.error('Error fetching experience:', error);
      }
    );
  }
  getProfile()
  {
    this.profileService.getProfile().subscribe((data:any)=>{
    this.profile=data[0];

   }
    );
  }

//   uploadResume()
//   {
//     if (this.resumeFile) {
//       const formData = new FormData();
//       // formData.append('jobSeekerId', this.user.jobSeekerId); // Add other fields as needed
//       // formData.append('profileId', this.profileId);
//       // formData.append('profileName', this.profile[0].profileName);
//       // formData.append('profileSummary', this.profile[0].profileSummary);
//       // formData.append('title', 'Sreelakshmi');
//       formData.append('file', this.resumeFile);
//       const profile={
//         JobseekerId: this.user.jobSeekerId,
//         profileId: this.profileId,
//         profileName: this.profile[0].profileName,
//         profileSummary: this.profile[0].profileSummary,
//         title: 'Sreelakshmi',
//         file:formData
//       }
    
//       file:formData;
//       file:this.resumeFile;
// console.log(this.resumeFile);
// console.log("form Data:"+formData);
//       this.profileService.uploadCV(profile).subscribe(
//         (response) => {
//           console.log('Resume uploaded successfully', response);
//           // Add any additional logic or UI updates after successful upload
//         },
//         (error: HttpErrorResponse) => {
//           console.error('Error uploading resume', error);
//           // Handle error - You can display an error message to the user
//         }
//       );
//     } else {
//       console.warn('Please choose a resume file');
//       // Display a message to the user to choose a file
//     }
//   }
  
  navigate(){
    this.route.navigate(['jobseeker-home/profile-info']);
  }
}
