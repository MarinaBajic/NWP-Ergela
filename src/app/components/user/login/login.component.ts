import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user: User = {} as User;
  public message: string | undefined;

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.user.username, this.user.password)
      .subscribe({
        next: (resp) => {
          console.log('Successfully logged in');
          this.message = resp.msg;
          this.router.navigate(['horses', 'list']);
        },
        error: (err) => {
          console.error('Error logging in', err);
          this.message = err.error.msg;
        }
      });
  }
}
