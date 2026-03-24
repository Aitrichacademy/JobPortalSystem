
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../../sevices/job.service';
import { Job, addJob } from '../../models/job';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent {
  addJobForm!: FormGroup;
  job: addJob;

  constructor(private formBuilder: FormBuilder, private jobService: JobService,private route:ActivatedRoute) { }
  // job: Job[] = [];

  ngOnInit() {
    // Form initialization
    this.addJobForm = this.formBuilder.group({
      // Define form controls with validation rules
      title: ['', Validators.required],
      
      location: ['', Validators.required],
      description: ['', Validators.required],
     type: ['', [Validators.required]],
      salary: ['', [Validators.required,]],
     workplace: ['', [Validators.required,]]
      
    });
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Use the received parameter
    });
  }


  // getJobdetails(): void {
   
  //   this.jobService.getjobid(this.id).subscribe(
  //     (response: addJob) => {
  //       this.job = response;
  //       this.addJobForm.patchValue({
  //         title: this.job.title,
  //         location: this.job.location,
  //         description: this.job.description,
  //         type: this.job.type,
  //         salary: this.job.salary,
  //         workplace: this.job.workplace,
  //       });
  //     },
  //     (error) => {
  //       console.log('error', error);
  //     }
  //   );
  // }


  // getJobdetails():void {
  //   const jobId = 'your_job_id_here'; // Replace 'your_job_id_here' with the actual job ID you want to fetch
  //   this.jobService.getjobid(jobId).subscribe(
  //     (response: addJob) => {
  //       this.job = response;
  //       this.addJobForm.patchValue({
  //         title: this.job.title,
  //         location: this.job.location,
  //         description: this.job.description,
  //         type: this.job.type,
  //         salary: this.job.salary,
  //         workplace: this.job.workplace,
  //       });
  //     },
  //     (error) => {
  //       console.log('Error fetching job details:', error);
  //     }
  //   );
  // }

  onSubmit() {
    const jobData: addJob = this.addJobForm.value;

    this.jobService.addJob(jobData).subscribe(
      (res: any) => {
        console.log(res);
      })
  }


  resetForm() {
    this.addJobForm.reset();
  }

  updateJob(job:addJob){


  }

}
