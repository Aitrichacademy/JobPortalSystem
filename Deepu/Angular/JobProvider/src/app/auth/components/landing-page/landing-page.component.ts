import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {


  constructor(private elementRef: ElementRef, private router: Router,private route:ActivatedRoute) {}

  toggleMenu(){
    this.elementRef.nativeElement.querySelector('#navbar').classList.toggle('navbar-mobile');
    this.elementRef.nativeElement.classList.toggle('bi-x');
  }

  isActive(path: string):boolean{
    return this.router.url.split('#')[1]===path;
  }

  loginRegister(){
    this.router.navigate(['Login-Register'], { relativeTo: this.route.parent });
  }
}
