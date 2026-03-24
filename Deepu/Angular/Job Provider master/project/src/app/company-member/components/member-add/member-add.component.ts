import { Component, OnInit } from '@angular/core';
import { CompanyMemberService } from '../../services/company-member.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  companyMemberForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private companymemberservice: CompanyMemberService
  ) {}

  ngOnInit(): void {
    this.companyMemberForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addCompanyMember() {
    if (this.companyMemberForm.valid) {
      const formValues = this.companyMemberForm.value;
      this.companymemberservice.addCompanyMember(formValues).subscribe(
        (response) => {
          alert('Company member added successfully!');
        },
        (error) => {
          console.error('Error adding company member:', error);
        }
      );
    }
  }
}