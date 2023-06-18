import { Injectable } from '@angular/core';
import { Horse } from '../model/horse';
import { Breed } from '../model/breed';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  private url: string;
  private horses: Horse[];

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/horses';
    // this.horses = [
    //   new Horse(1, 'assets/images/horse1.jpg', Date.now(), 'Thunderbolt', 'Maestro Magelan I', 'male', Breed.Clydesdale),
    //   new Horse(2, 'assets/images/horse2.jpg', Date.now(), 'Blossom', 'Maestoso II', 'female', Breed.Mustang)
    // ]
  }

  getHorses(): Observable<Horse[]> {
    // return ObservableOf(this.horses);
    return this.http.get<Horse[]>(this.url);
  }

  addHorse(horse: Horse): Observable<any> {
    // let foundHorse = this.horses.find(each => each.getId() === horse.getId());
    // if (foundHorse) {
    //   return throwError(() => new Error('Horse with code ' + horse.getId + ' already exists!'));
    // }
    // this.horses.push(horse);
    // return ObservableOf(() => {
    //   message: 'Horse with id ' + horse.getId + ' successfuly created!';
    // });
    return this.http.post(this.url, horse);
  }
}
