import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  companyForm: FormGroup;
  industries: any[] = [];
  locations: any[] = [];
  constructor(private formBuilder: FormBuilder,private addCompanyService:CompanyService) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      legalName: ['', Validators.required],
      summary: ['', Validators.required],
      industryId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.loadIndustries();
    this.loadLocations();
}
addCompany(){
  alert("hello")
  if(this.companyForm.valid){
    const formValues=this.companyForm.value;
    this.addCompanyService.addCompany(formValues).subscribe(response=>{
      alert(response.id);
        localStorage.setItem('companyId',response.id)
    })
  }
  
}
loadIndustries() {
  this.addCompanyService.getIndustries().subscribe((data: any[]) => {
    this.industries = data;
  });
}

loadLocations() {
  this.addCompanyService.getLocations().subscribe((data: any[]) => {
    console.log(data)
    this.locations = data;
    
  });
}

}