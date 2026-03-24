import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications:Application[]=[];
  applicationCount!: number;
  
  constructor(private applicationService:ApplicationService){}
  
  ngOnInit(): void {

    this.applicationService.getApplicants().subscribe((application:Application[])=>{
      this.applications=application;
      console.log(this.applications.length);
      this.applicationCount=this.applications.length

    })
    
  }


}
