import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../models/user-profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http:HttpClient) { }
  getProviderProfile(){
    return this.http.get<UserProfile[]>(environment.baseurl+'/jobProviderProfile')
}
changeUsername(providerProfileData:any){
  const id = 1;
  return this.http.patch<any>(environment.baseurl+'/jobProviderProfile'+'/'+id,providerProfileData)
}

changePassword(formData:any){
  const id = 1;
  return this.http.patch<any>(environment.baseurl+'/jobProviderProfile'+'/'+id,formData)
}
}
