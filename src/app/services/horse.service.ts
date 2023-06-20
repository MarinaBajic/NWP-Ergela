import { Injectable } from '@angular/core';
import { Horse } from '../model/horse';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/ergela';
  }

  getHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>(this.baseUrl + '/horses');
  }

  addHorse(horse: Horse): Observable<any> {
    return this.http.post(this.baseUrl + '/add-horse', horse);
  }

  // deleteHorse(shortName: string): Observable<any> {
  //   return this.http.delete(this.baseUrl + '/delete-horse', {params: {shortName: shortName}});
  // }
}
