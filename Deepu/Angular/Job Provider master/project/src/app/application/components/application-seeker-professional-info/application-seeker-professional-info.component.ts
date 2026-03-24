import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-application-seeker-professional-info',
  templateUrl: './application-seeker-professional-info.component.html',
  styleUrls: ['./application-seeker-professional-info.component.css']
})
export class ApplicationSeekerProfessionalInfoComponent {
  @Input() data: any;
  @Input() title: any;
  @Input() image:any;
}
