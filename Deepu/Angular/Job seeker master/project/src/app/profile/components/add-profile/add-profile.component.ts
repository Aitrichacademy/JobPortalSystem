import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css'],
  animations: [
    trigger('borderAnimation', [
      transition('* => *', [
        style({ borderColor: 'transparent' }),
        animate('3s', style({ borderColor: '#990967' })),
        animate('3s', style({ borderColor: '#775d09' })),
        animate('3s', style({ borderColor: '#890707' })),
        animate('3s', style({ borderColor: '#07d326' })),
        animate('3s', style({ borderColor: '#0b4158' })),
      ]),
    ]),
  ],
})
export class AddProfileComponent {
profileForm!: FormGroup;
   // Declare properties here
   constructor(private fb: FormBuilder ,private profileService:ProfileService,private route:Router){
    this.profileForm = this.fb.group({
      profileName: ['', Validators.required], // Example form control with validation
      profileSummary: ['', Validators.required]

    });
   }
   

   addProfile(){
    alert("hello");
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value; 
      const data={
        jobSeekerId:sessionStorage.getItem('jobSeekerId'),
        profileName:this.profileForm.value.profileName,
        profileSummary:this.profileForm.value.profileSummary
      
      }
      this.profileService.addNewProfile(data).subscribe(response=>{
        console.log(response);
        if (data && response.status >= 200 && response < 300) {
          // Successful response (status code between 200 and 299)
          this.route.navigate(['jobseeker-home/profile']);
          alert("sucessfully added");
         
        }
      })
   }}
 }
