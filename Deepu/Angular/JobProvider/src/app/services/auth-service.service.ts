import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../environment/environment';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


import { Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  [x: string]: any;
 companyId=sessionStorage.getItem('companyId');
 jobProviderId=sessionStorage.getItem('JobProviderId')
  url='http://localhost:3000/jobProvider';
  static navigate: any;
  companyForm: any;
  constructor(private router: Router,private http:HttpClient,public dialog:MatDialog,private route:ActivatedRoute) {}

  

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    console.log("isLoggedin() is executed ")
    return this.getToken()== null;
    
    // null==null is true when token is not set
    // abcdefghijklmnopqrstuvwxyz==null is false when token is set
    

    // null!==null is false when token is not set
    // abcdefghijklmnopqrstuvwxyz!==null is true when token is set
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('Email');
    sessionStorage.removeItem('JobProviderId');
    sessionStorage.removeItem('Username');
    console.log("Token removed")
    this.router.navigate(['Login-Register']);
  }


 signup(user:any):Observable<any>{
  return this.http.post(environment.baseurl+'api/v1/job-provider/signup', user)
 }

sendEmail(signupRequestId:any):Observable<any> {

    return this.http.get<any>(environment.baseurl+'api/v1/job-provider/signup/'+signupRequestId+'/verify-email');
  }

  setNewPassWord(password:string,jobProviderSignupRequestID:any):Observable<any>{
     const jsonstring = JSON.stringify(password);
     console.log(jsonstring)
     const headers=new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json'});
     return this.http.post<any>(environment.baseurl+'api/v1/job-provider/signup/'+jobProviderSignupRequestID+'/set-password',jsonstring,{
      headers: headers},);
  }

  

login(user:any){
  return this.http.post<any>(environment.baseurl + "api/v1/job-provider/login", user)
}

 

// add company 
addCompany(company: any) {
  const jobProviderId = sessionStorage.getItem('JobProviderId');
  return this.http.post<any>(environment.baseurl + 'api/Company/job-provider/' + jobProviderId + '/company', company).subscribe(

    response => {
    console.log( response);
    this.getCompanyId()
    // sessionStorage.removeItem('companyId')
    console.log("company added successfully");
  },
  (error)=>{
    alert('cannot add company');
    console.log('error in adding company', error);
  }
  );
}

// get company id
getCompanyId(){
  return this.http.get<any>(environment.baseurl+'api/v1/job-provider/'+this.jobProviderId+'/getCompany').subscribe(
    response => {
    console.log( response);
    console.log(response[0].id)
    sessionStorage.setItem('companyId',response[0].id)
    
  },
  (error)=>{
    alert('cannot get company');
    console.log('error in getting company', error);
  }
  );
}


getIndustryId(){
  return this.http.get<any>(environment.baseurl+'api/v1/GetIndustries')
}
getLocation(){
  return this.http.get<any>(environment.baseurl+'api/v1/GetLocations');
}



// ===========================
getCompanyDetails(): Observable<any> {
   
  return this.http.get<any>(environment.baseurl+'api/Company/job-provider/company/'+this.companyId);
}

updateCompanyDetails(updatedDetails:any){
  
  return this.http.put<any>(environment.baseurl+'api/Company/job-provider/company/'+this.companyId,updatedDetails).subscribe(
    response => {
    console.log( response);
  },
  (error)=>{
    alert('cannot update company');
    console.log('error in update company', error);
  }
  );
}

}


