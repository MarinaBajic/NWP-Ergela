import { Injectable } from '@angular/core';
import { Horse } from '../model/horse';
import { Breed } from '../model/breed';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  private getHorsesUrl: string;
  private addHorseUrl: string;
  private horses: Horse[];

  constructor(private http: HttpClient) {
    this.getHorsesUrl = 'http://localhost:8080/ergela/horses';
    this.addHorseUrl = 'http://localhost:8080/ergela/add-horse';
  }

  getHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>(this.getHorsesUrl, {
      headers: new HttpHeaders()
        .set('Autorization', 'MyAutorizationHeaderValue')
        .set('X-EXAMPLE-HEADER', 'TestValue')
    });
  }

  addHorse(horse: Horse): Observable<any> {
    return this.http.post(this.addHorseUrl, horse);
  }
}
