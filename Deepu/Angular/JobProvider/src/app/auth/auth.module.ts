import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { SpDialogComponent } from './components/sp-dialog/sp-dialog.component';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginRegisterComponent,
    SpinnerComponent,
    SetPasswordComponent,
    SpDialogComponent,

    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,FormsModule,ReactiveFormsModule,MaterialModule
  ]
})
export class AuthModule { }
