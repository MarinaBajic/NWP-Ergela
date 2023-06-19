import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStoreService } from './user-store.service';
import { Observable, map } from 'rxjs';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private loginUrl: string;
  private registerUrl: string;

  constructor(private http: HttpClient, private userStore: UserStoreService, private authService: AuthService) {
    this.loginUrl = 'http://localhost:8080/ergela/login';
    this.registerUrl = 'http://localhost:8080/ergela/register';
  }

  login(user: User): Observable<any> {
    return this.http.post(this.loginUrl, user)
      .pipe(map((resp: any) => {
        console.log("Token: " + resp.accessToken);
        this.authService.authToken = resp.accessToken;
        this.userStore.token = resp.accessToken;
      return resp;
    }));
  }

  register(user: User): Observable<any> {
    return this.http.post(this.registerUrl, user);
  }
}
