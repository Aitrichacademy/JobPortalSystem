
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.css']
})
export class AddNewProfileComponent implements OnInit{
  
  profiles: any[] = [];
  // data:any='hello';
  resumeFile: any;
  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getAllProfile().subscribe((data: any) => {
      this.profiles=data;
      console.log(this.profiles)
      
    });
  }

  viewProfile(profileId: string) {
    this.router.navigate(['jobseeker-home/profile-info',profileId]);
  }

 
  addProfile() {
    // Implement logic to add a new profile
  }

  navigateToAddProfile() {
    this.router.navigate(['jobseeker-home/add-profile']);
  }
  uploadResume(profileId:any,name:any,summary:any)
  {
    // alert(profileId);
    if (this.resumeFile) {
      const formData = new FormData();
      // formData.append('jobSeekerId', this.user.jobSeekerId); // Add other fields as needed
      // formData.append('profileId', this.profileId);
      // formData.append('profileName', this.profile[0].profileName);
      // formData.append('profileSummary', this.profile[0].profileSummary);
      // formData.append('title', 'Sreelakshmi');
      formData.append('file', this.resumeFile);
      // const profile={
      //   JobseekerId: this.user.jobSeekerId,
      //   profileId: this.profileId,
      //   profileName: this.profile[0].profileName,
      //   profileSummary: this.profile[0].profileSummary,
      //   title: 'Sreelakshmi',
      //   file:formData
      // }
    
      file:formData;
      file:this.resumeFile;
console.log(this.resumeFile);
console.log("form Data:"+formData);
      this.profileService.uploadCV(profileId,name,summary,formData).subscribe(
        (response) => {
          console.log('Resume uploaded successfully', response);
          // Add any additional logic or UI updates after successful upload
        },
        (error: HttpErrorResponse) => {
          console.error('Error uploading resume', error);
          // Handle error - You can display an error message to the user
        }
      );
    } else {
      console.warn('Please choose a resume file');
      // Display a message to the user to choose a file
    }
  }
}
