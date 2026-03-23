import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { CompaniesComponent } from '../components/companies/companies.component';
import { JobsComponent } from '../components/jobs/jobs.component';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompaniesComponent,
    
    JobsComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,MaterialModule,
    ProviderRoutingModule,ReactiveFormsModule,FormsModule,
  ]
})
export class ProviderModule { }
