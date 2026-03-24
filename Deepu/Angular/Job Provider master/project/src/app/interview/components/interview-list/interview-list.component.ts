import { Component } from '@angular/core';
import { InterviewService } from '../../services/interview.service';
import { Interview } from '../../models/interview';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent {
  interviewList :Interview[]=[];

  constructor(private interviewService:InterviewService){}
  ngOnInit(){
    this.interviewService.getInterviewList().subscribe((interviewList:Interview[])=>{
      this.interviewList=interviewList;
      console.log(this.interviewList);
    })
  }

}
