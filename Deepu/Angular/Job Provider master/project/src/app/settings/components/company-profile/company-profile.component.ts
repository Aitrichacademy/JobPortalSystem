import { Component, OnInit } from '@angular/core';
import { CompanyProfileService } from '../../services/company-profile.service';
import { CompanyProfile } from '../../models/company-profile';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  companyProfile: CompanyProfile[]=[];
  img1='../../../../assets/images/settings/binoculars 1.png';
  img2='../../../../assets/images/settings/bullseye 1.png';
  img3='../../../../assets/images/settings/receiver 1.png';
  constructor(private companyService: CompanyProfileService) { }

  ngOnInit(): void {
    this.companyService.getCompanyProfile().subscribe((companyProfile:CompanyProfile[]) => {
    this.companyProfile=companyProfile;
    console.log(this.companyProfile);
    
    });
  }


}
