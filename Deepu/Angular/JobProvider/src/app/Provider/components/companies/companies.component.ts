import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {

  viewjobs: any

  constructor(private auth: AuthServiceService, private toast: ToastrService) { }


  companyForm!: FormGroup;
  editcompanyForm!: FormGroup;
  companyId = localStorage.getItem('companyId');
  companyDetails: any;


  ngOnInit(): void {
    // add company form group
    this.companyForm = new FormGroup({
      legalName: new FormControl('', [Validators.required]),
      industryId: new FormControl('', [Validators.required]),
      summary: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      locationId: new FormControl('', [Validators.required]),
    });
    // /edit company form group
    this.editcompanyForm = new FormGroup({
      legalName: new FormControl('', [Validators.required]),
      summary: new FormControl('', [Validators.required]),
      email: new FormControl("", [Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl("", [Validators.required]),
      website: new FormControl("", [Validators.required]),

    });
    // load industry and location function
    this.loadIndustries();
    this.loadLocation();

    // displaying company details
    this.auth.getCompanyDetails().subscribe(
      (response) => {
        // Handle the response from the API here
        this.viewjobs = response;
      },
      (error) => {
        this.toast.error('Error in displaying company', 'error')
      }
    );
    // getting company id
    this.auth.getCompanyId()
  }


  // add company submit form
  companySubmit() {
    if (this.companyForm.valid) {

      this.auth.addCompany(this.companyForm.value)
      this.toast.success('Successfully added company', 'Done')
    }
    else {
      this.toast.error('Error in adding company', 'Failed')

    }
  }

  addCompany() {
    if (this.companyForm.valid) {
      const formValues = this.companyForm.value;
      this.auth.addCompany(formValues)
    }
  }


  industries: any[] = [];
  locations: any[] = [];

  loadIndustries() {
    this.auth.getIndustryId().subscribe(industries => {
      this.industries = industries;
    });
  }

  loadLocation() {
    this.auth.getLocation().subscribe(locations => {
      this.locations = locations;
    });
  }
  editMode = false;
  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  updatecompany() {
    if (this.editcompanyForm.valid) {
      const updatedDetails = this.editcompanyForm.value;
      this.auth.updateCompanyDetails(updatedDetails)
      this.editMode = false;
    }
  }


}
