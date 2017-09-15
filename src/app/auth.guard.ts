import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.isAuthenticated()) {
          console.log('AUTH GUARD PASSED');
          return true;
        } else {
          console.log('BLOCKED BY AUTH GUARD');
          this.router.navigate(['/']);
        }
  }

} // end class
