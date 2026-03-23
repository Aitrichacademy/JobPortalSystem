import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { SpDialogComponent } from './components/sp-dialog/sp-dialog.component';


const routes: Routes = [
 
  {path:'spinner',component:SpinnerComponent},
  { path: 'Landing-Page', component: LandingPageComponent },
  { path: '', redirectTo:'Landing-Page',pathMatch:'full'},
  { path: 'Login-Register', component: LoginRegisterComponent },
  { path:'spinner',component:SpinnerComponent },
  { path: 'set-password', component: SetPasswordComponent },
  { path: 'sp-dialog', component:SpDialogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
