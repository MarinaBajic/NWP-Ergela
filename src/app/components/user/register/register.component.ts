import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public user: User = {} as User;
  public message: string | undefined;

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.userService.register(this.user.username, this.user.password)
      .subscribe({
        next: (resp) => {
          console.log('Successfully registered');
          this.message = resp.msg;
          this.router.navigate(['horses', 'list']);
        }, error: (err) => {
          console.error('Error registering', err);
          this.message = err.error.msg;
        }
      });
  }
}
