import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interview } from '../models/interview';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InterviewService {
  baseurl=environment.baseurl;
  constructor(private http:HttpClient) { }

  getInterviewList(){
    return this.http.get<Interview[]>(environment.baseurl+'/interviewSchedule');
  }
  scheduleInterview(data:Interview){
    return this.http.post(`${this.baseurl}/post/interview`,data)
  }
}
