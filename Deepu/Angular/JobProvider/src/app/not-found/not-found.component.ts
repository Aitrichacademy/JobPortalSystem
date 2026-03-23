import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {


  constructor(private router:Router,private route:ActivatedRoute){}
  // redirect(){
  //    this.router.navigate(['/landing-page'])
  // }

  redirectToLanding(){
    // this.router.navigate(['Landing-Page'], { relativeTo: this.route.parent });
     this.router.navigate(['/auth/Landing-Page']);

   }
}
