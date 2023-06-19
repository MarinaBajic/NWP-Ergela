import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private userStoreService: UserStoreService) {
  }
  
  isUserLoggedIn() {
    console.log("Token za login/logout dugme: " + this.authService.authToken);
    return this.authService.authToken !== undefined;
  }

  logoutUser() {
    this.authService.authToken = undefined;
    this.userStoreService.token = undefined;
  }
}
