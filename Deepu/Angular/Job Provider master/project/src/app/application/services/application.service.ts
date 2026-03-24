import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../models/application';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { }

  getApplicants(){
    return this.http.get<Application[]>(environment.baseurl+'/application');
  }

}
