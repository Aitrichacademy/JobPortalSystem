
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companies } from '../model/job.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class jobService {
  private removeCompanyUrl=environment.baseurl+`/api/v1/admin/RemoveCompanies/`;
  private companiesUrl = environment.baseurl+`/api/v1/admin/GetCompanies`; // Change the URL if your JSON Server is running on a different port.
  private filterUrl = environment.baseurl+`/api/v1/admin/SearchCompanies`; 
  
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Companies[]> {
    return this.http.get<Companies[]>(this.companiesUrl);
  }
  removeCompany(id: string):Observable<any>
  {
    const url = `${this.removeCompanyUrl}${id}`;
    return this.http.delete(url);
  }
  filterJobs(searchTerm:string){
    return this.http.get<Companies[]>(this.filterUrl+`?name=${searchTerm}`);
  }
}