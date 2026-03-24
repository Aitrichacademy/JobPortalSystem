import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Card } from '../model/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  private jobsUrl = environment.baseurl+'/api/v1/admin/GetJobCount';
  private jobSeekersUrl = environment.baseurl+'/api/v1/admin/GetJobSeekers';
  private companiesUrl = environment.baseurl+'/api/v1/admin/GetCompanyCount';
  private jobProvidersUrl = environment.baseurl+'/api/v1/admin/GetJobProviderCount';
// card:Card[]=[];
  constructor(private http: HttpClient) { }

getTotaljobsPosted() {
  return this.http.get<any>(this.jobsUrl);
  }
  getTotaljobSeekers() {
    return this.http.get<any>(this.jobSeekersUrl);
    }
    getTotalcompanies(){
      return this.http.get<any>(this.companiesUrl);
    }
    getTotalJobProvider(){
      return this.http.get<any>(this.jobProvidersUrl);
      }
    
}
