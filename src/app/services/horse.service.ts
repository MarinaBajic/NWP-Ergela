import { Injectable } from '@angular/core';
import { Horse } from '../model/horse';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  
  private getHorsesUrl: string;
  private addHorseUrl: string;

  constructor(private http: HttpClient) {
    this.getHorsesUrl = 'http://localhost:8080/ergela/horses';
    this.addHorseUrl = 'http://localhost:8080/ergela/add-horse';
  }

  getHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>(this.getHorsesUrl);
  }

  addHorse(horse: Horse): Observable<any> {
    return this.http.post(this.addHorseUrl, horse);
  }
}
