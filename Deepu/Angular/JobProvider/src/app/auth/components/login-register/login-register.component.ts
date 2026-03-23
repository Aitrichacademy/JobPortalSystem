import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {


   // password visibility default value
   hide:boolean = true;
   show:boolean=true;

   @ViewChild('containerr') containerr!: ElementRef;
 
   toggleSignUpMode(): void {
     this.containerr.nativeElement.classList.add('sign-up-mode');
   }
 
   toggleSignInMode(): void {
     this.containerr.nativeElement.classList.remove('sign-up-mode');
   }
 
   loginForm!: FormGroup;
   signUpForm!: FormGroup;

   constructor(private router: Router, private auth: AuthServiceService, private route: ActivatedRoute, private toast: ToastrService) { }
 
   ngOnInit(): void {
 
     this.loginForm = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl('', [Validators.required,
       ])
     });
 
     this.signUpForm = new FormGroup({
       firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
       lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
       userName: new FormControl('', [Validators.required]),
       email: new FormControl('', [Validators.required, Validators.email]),
       phone: new FormControl('', [Validators.required]),
     });
 
   }
 
   loginSubmit() {
     const email = this.loginForm?.get('email')?.value;
     const password = this.loginForm?.get('password')?.value;
     this.auth.login(this.loginForm.value).subscribe((response: any) => {
     localStorage.setItem('token', response.token);
      sessionStorage.setItem('Email', response.email);
      sessionStorage.setItem('JobProviderId', response.id);
      sessionStorage.setItem('Username', response.userName);
      this.toast.success('Successfully Logged In', 'Success')
      this.router.navigateByUrl('/provider');
    },
      (error) => {
        this.toast.error('Invalid Credentials', 'Login Failed')
  
      }
    )
   }
   
 
 
   signUpSubmit() {
 
     if (this.signUpForm.valid) {
 
       this.auth.signup(this.signUpForm.value).subscribe(
         (response: any) => {
          this.toast.success('Welcome to the Indulge Family','Successfully Registered')

         },
         (error) => {
          this.toast.error('Please try again', 'Registration Failed')

 
         }
       );
       this.show=!this.show;
     }
   }
 
   forgotPassword() {
     this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
   }
 
}
