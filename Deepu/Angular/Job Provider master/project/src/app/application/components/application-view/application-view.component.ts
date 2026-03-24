import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/settings/models/professional-info';
import { UserProfile } from 'src/app/settings/models/user-profile';
import { UserProfileService } from 'src/app/settings/services/user-profile.service';

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.css']
})
export class ApplicationViewComponent implements OnInit {
  jobProviderProfile:UserProfile[]=[];
  providerProfession:Profession[]=[];
  img1='../../../../assets/images/settings/light-bulb 1.png';
  img2='../../../../assets/images/settings/portfolio 1.png';
  img3='../../../../assets/images/settings/portfolio 2.png';
    constructor(private userProfile:UserProfileService){}
  
    ngOnInit(){
      this.userProfile.getProviderProfile().subscribe((jobProviderProfile:UserProfile[])=>
      {
        this.jobProviderProfile=jobProviderProfile;
        console.log(this.jobProviderProfile);
      });
    }
  
  }
  