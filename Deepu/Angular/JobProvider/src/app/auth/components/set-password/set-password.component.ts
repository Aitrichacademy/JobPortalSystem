import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpDialogComponent } from '../sp-dialog/sp-dialog.component';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {

  registrationForm!: FormGroup;
  signupId!: string;

  constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute, private auth: AuthServiceService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/)
      ]),
    });



    this.activatedRoute.queryParams.subscribe(params => {
      this.signupId = params['signupid'];
      console.log(params['signupid']);
      // You can now use this.signupId in your component logic
      this.auth.sendEmail(this.signupId).subscribe(
        (response: any) => {
          this.toast.success('Verified email successfully', 'Alright')

        },
        (error) => {
          this.toast.error('error in email verification', 'Action Failed')

        }
      );
    });

  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordControl = control.get('password');
      const confirmPasswordControl = control.get('confirmPassword');

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const password: string = this.registrationForm.value.password;
      this.auth.setNewPassWord(password, this.signupId).subscribe(
        (response: HttpResponse<string>) => {

          const statusCode = response.status;
          console.log(`Status Code: ${statusCode}`);
          alert(response.status);
          if (response.status === 200) {

            this.toast.success('Password set successfully', 'Good work')
          }
          else {
            this.toast.error('error in setting password', 'Action Failed')
          }
        },
      );
      const dialogref = this.dialog.open(SpDialogComponent)
    }
    else {
      this.toast.error('Form not submitted', 'Failed')
    }
  }

}
