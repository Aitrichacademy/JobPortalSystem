import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from '../../model/skill';
import { SkillService } from '../../service/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent {

  skillForm: FormGroup;
  showMessage = false;
  constructor(
    private formBuilder: FormBuilder,
    private skillService: SkillService,
    private router: Router
  ) {
    this.skillForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.skillForm.valid) {
      const skillData = this.skillForm.value;

      this.skillService.addSkill(skillData).subscribe(
        (response) => {
          this.skillForm.reset();
          console.log('Skill added successfully:', response);

          this.showMessage = true;
         
        },
        (error) => {
          console.error('Error adding skill:', error);
          // Handle the error, show a message, etc.
        }
      );
    }
  }
  
  navigateToSkillsView() {
    // Navigate to the 'viewSkill' route
    this.router.navigate(['/admin-home/skill/viewSkill']);
  }
}