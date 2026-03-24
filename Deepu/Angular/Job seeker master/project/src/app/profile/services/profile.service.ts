import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import {  skill } from '../models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  jobseekerId=sessionStorage.getItem('jobSeekerId');
  profileId=sessionStorage.getItem('profileId');
// updateUrl=`http://192.168.1.21/Build/api/v1/${this.jobseekerId}/profiledetails`;
    addNewProfile(data:any){
      return this.http.post<any>(environment.baseurl+'api/v1/AddProfile',data);
    }
  
  uploadCV(profileId:any,profileName:any,profileSummary:any,formData:any): Observable<any> {
    // const uploadUrl =environment.baseurl+ `api/v1/job-seeker/upload-resume`; // Replace with your upload CV endpoint
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
   const  title="cv"
    return this.http.post(environment.baseurl+'api/v1/job-seeker/upload-resume?jobSeekerId='+this.jobseekerId+'&profileId='+profileId+'&profileName='+profileName+'&profileSummary='+profileSummary+'&title='+title, formData,{headers});
  }
  getProfile()
  {
    return this.http.get<any>(environment.baseurl+'api/v1/'+this.jobseekerId+'/profile');
  } 
  getAllProfile()
  {
    return this.http.get<any>(environment.baseurl+'api/v1/GetJobSeekerProfile/'+this.jobseekerId);
  }
  getResume(){
    return this.http.get<any>(environment.baseurl+'api/v1/job-seeker/getResume/'+this.profileId);
  }
  addSkill(data:any[],profileId:any){
    alert(this.jobseekerId)
   return this.http.post<any>(environment.baseurl+'api/v1/'+this.jobseekerId+'/profile/'+profileId+'/skills',data);
  }
  getAllSkill(){
    return this.http.get<any>(environment.baseurl+'api/v1/skills');
  }
  getSkillByUser(profileId:any): Observable<skill[]>{
    return this.http.get<any[]>(environment.baseurl+'api/v1/'+this.jobseekerId+'/profile/'+profileId+'/skills');
  }
  addQualification(name:any,description:any,profileId:any){
    
    const data={
      name:name,
      description:description
    }
    return this.http.post<any>(environment.baseurl+'api/v1/'+this.jobseekerId+'/profile/'+profileId+'/Qualification',data);
  }

  getQualification(profileId:any){
    return this.http.get<any>(environment.baseurl+'profile/'+profileId+'/Qualification');
  }

  addExperience(experience:any,profileId:any){
    return this.http.post<any>(environment.baseurl+'api/v1/'+this.jobseekerId+'/profile/'+profileId+'/Experience',experience);
  }

  updateJobSeekerProfile(values: any) {
    const headers = new HttpHeaders()
    
    .set('Content-Type', 'multipart/form-data')
 
    return this.http.patch<any>(environment.baseurl+'api/v1/JobSeekerProfileUpdate',values,{headers});
  }
   
  getExperience(profileId: any): Observable<any[]> {
    return this.http.get<any[]>(environment.baseurl + 'api/v1/' + this.jobseekerId + '/profile/' + profileId + '/Experince');
  }
   
  getUserProfileById(id: any) {
  
    return this.http.get<any[]>(environment.baseurl + 'api/v1/'+id+'/profiledetails');
  }
}
