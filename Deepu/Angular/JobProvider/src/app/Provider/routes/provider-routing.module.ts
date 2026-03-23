import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CompaniesComponent } from '../components/companies/companies.component';
import { JobsComponent } from '../components/jobs/jobs.component';

const routes: Routes = [
  // default parent component should be displayed is sidebar
  {path: '',component:SidebarComponent,
  children:[
    // default child component should be displayed is dashboard
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo: 'dashboard', pathMatch: 'full'},
    {path:'companies',component:CompaniesComponent},
    {path:'jobs',component:JobsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
