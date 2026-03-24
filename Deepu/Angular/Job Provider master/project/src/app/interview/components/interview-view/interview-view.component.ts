import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterviewService } from '../../services/interview.service';
import { Interview } from '../../models/interview';

@Component({
  selector: 'app-interview-view',
  templateUrl: './interview-view.component.html',
  styleUrls: ['./interview-view.component.css']
})
export class InterviewViewComponent {
  ScheduleInteriewForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private jobService: InterviewService) { }
  interview: Interview[] = [];

  ngOnInit() {
    // Form initialization
    this.ScheduleInteriewForm = this.formBuilder.group({
      // Define form controls with validation rules
      jobTitle: ['', Validators.required],
      location: ['', Validators.required],
      interviewDate: ['', Validators.required],
      interviewTime: ['', Validators.required]
      // Add more form controls as needed
    });
  }

  onSubmit() {
    console.log(this.ScheduleInteriewForm.value);
    this.interview = this.ScheduleInteriewForm.value;
    // this.jobService.scheduleInterview(this.interview).subscribe(
    //   (res) => {
    //     console.log("Interview Scheduled Successfully", res);
    //   }
    // );
  
    this.resetForm();
  }
  resetForm() {
    this.ScheduleInteriewForm.reset();
  }

}

