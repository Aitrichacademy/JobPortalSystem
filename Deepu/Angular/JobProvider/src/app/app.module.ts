import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginRegisterComponent } from './authentication/components/login-register/login-register.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { MaterialModule } from './material/material.module';
// import { ForgotPasswordComponent } from './authentication/components/forgot-password/forgot-password.component';
// import { ConfirmPasswordComponent } from './authentication/components/confirm-password/confirm-password.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
// import { SpinnerComponent } from './spinner/spinner.component';
// import { LandingPageComponent } from './authentication/components/landing-page/landing-page.component';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { ErrorMsgComponent } from './authentication/components/error-msg/error-msg.component';
// import { ConfirmDialogComponent } from './authentication/components/confirm-dialog/confirm-dialog.component';
// import { SetPasswordComponent } from './authentication/components/set-password/set-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { Subscription } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,NotFoundComponent,
    // LoginRegisterComponent,
    // ForgotPasswordComponent,
    // ConfirmPasswordComponent,
    
    // SpinnerComponent,
    // LandingPageComponent,
    // ErrorMsgComponent,
    // ConfirmDialogComponent,
    // SetPasswordComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ReactiveFormsModule,FormsModule,
     MaterialModule,
     MatButtonModule,
     ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton:true,
      tapToDismiss:true,
     }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
