import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../../sevices/job.service';
import { Job, addJob } from '../../models/job';
import { CompanyService } from 'src/app/company/services/company.service';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent {
  addJobForm!: FormGroup;
  industryName: any[];
  locationName: any[];
  catogoryName:any[];

  constructor(private formBuilder: FormBuilder, private jobService: JobService,private companyService:CompanyService) { }
  // job: Job[] = [];

  ngOnInit():void {
    // Form initialization
    this.addJobForm = this.formBuilder.group({
      // Define form controls with validation rules
      jobTitle: ['', Validators.required],
      
      locationId: ['', Validators.required],
      industryName:['',Validators.required],
      jobSummary: ['', Validators.required],
      jobCategoryName: ['', [Validators.required]],
      // salary: ['', [Validators.required,]],
      postedByNavigationFirstName:['',[Validators.required]]
     
      // Add more form controls as needed
    });
    this.loadIndustries();
    this.loadLocations();
    this.loadCategories();
  }

  onSubmit() {
    const jobData: addJob = this.addJobForm.value;
      alert(jobData);
      const companyId = localStorage.getItem('companyId');
      jobData.postedByNavigationFirstName=localStorage.getItem('jobProviderId');
      if(companyId){

    this.jobService.addJob(jobData).subscribe(
      (res: any) => {
        console.log(res);
      })
    }
    else{
      alert("Cannot post job Please add company details");
    }
    this.resetForm();
 }
  resetForm() {
    this.addJobForm.reset();
  }
  loadIndustries() {
    this.companyService.getIndustries().subscribe((data: any[]) => {
      this.industryName = data;
    });
  }
  
  loadLocations() {
    this.companyService.getLocations().subscribe((data: any[]) => {
     this.locationName = data;
      
    });
  }
  loadCategories() {
    this.companyService.getCategories().subscribe((data: any[]) => {
      this.catogoryName = data;
      });
  }

}
