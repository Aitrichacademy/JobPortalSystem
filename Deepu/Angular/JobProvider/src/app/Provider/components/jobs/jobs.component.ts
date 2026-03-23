import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

constructor(private toast: ToastrService){}

  jobpostForm!:FormGroup;
  ngOnInit(): void {

    this.jobpostForm = new FormGroup({
      jobtitle: new FormControl('', [Validators.required]),
      industryname: new FormControl('', [Validators.required,]),
      jobsummary: new FormControl('', [Validators.required,]),
      jobcategory:new FormControl('',[Validators.required,]),
      locations: new FormControl('', [Validators.required,]),
    });
  }

  jobSubmit(){
    if(this.jobpostForm.valid){
      console.log(this.jobpostForm.value)
      this.toast.success('Job Posted Successfully','Done')
    }
    else{
      console.log("error in job form submit")
      this.toast.error('Job Posting Failed','Error')
    }
  }

}