import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean;
   constructor(private auth: AuthService) {
     this.auth.handleAuthentication();
    //  this.isLoggedIn = this.auth.isAuthenticated();
   }

} // end class
