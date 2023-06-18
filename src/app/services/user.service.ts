import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStoreService } from './user-store.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private userStore: UserStoreService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('/ergela/user/login', {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      return resp;
    }));
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post('/ergela/user/register', {
      username: username,
      password: password
    });
  }
}
