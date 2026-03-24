import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { register } from '../models/register';
import { UserLogin } from '../models/login';
import { Observable, catchError, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl=environment.baseurl;
  private role: string = '';
  
  constructor(private http: HttpClient) { }
  signUp(user: register) {
    return this.http.post(environment.baseurl +'api/v1/job-provider/signup/', user)
  }
  verifyEmail(signupRequestId:any):Observable<any>{
    
    return this.http.get<any>(environment.baseurl +'api/v1/job-provider/signup/'+signupRequestId+'/verify-email')
  }
  getToken(): string {
    return localStorage.getItem('accessToken') // Return an empty string if the token is null or undefined
  }
  getRole(): string {
    return this.role;
  }
  login(data: UserLogin): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'api/v1/job-provider/login', data).pipe(
      tap((response) => {
        if (response && response.token) {
          this.role = response.role;
        }
      })
    );
  }
  setNewPassword(pass: string,jobProviderSignupRequestId:any) {
   alert("setnewpswd")
   const headers = { 'Content-Type': 'application/json' };
const jsonString = JSON.stringify(pass);
return this.http.post(environment.baseurl + 'api/v1/job-provider/signup/' + jobProviderSignupRequestId + '/set-password', jsonString, { headers });
  }
}
