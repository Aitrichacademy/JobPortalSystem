import { AuthServiceService } from '../services/auth-service.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthServiceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    
    // if token value==null then token is not set therefore provider module should not be loaded 
    if (this.auth.isLoggedIn()) {
    return false;
    }
     else{
      
      return true;
      
      
    }
    
    
  }
}