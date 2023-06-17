import { Injectable } from '@angular/core';
import { Horse } from '../model/horse';
import { Breed } from '../model/breed';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  private url: string = 'assets/data/horses.json';
  private horses: Horse[];

  constructor(private http: HttpClient) {
    this.horses = [
      new Horse(1, 'assets/images/horse1.jpg', Date.now(), 'Thunderbolt', 'Maestro Magelan I', 'male', Breed.Clydesdale),
      new Horse(2, 'assets/images/horse2.jpg', Date.now(), 'Blossom', 'Maestoso II', 'female', Breed.Mustang)
    ]
  }

  getHorses(): Horse[] {
    return this.horses;
  }

  addHorse(horse: Horse) {
    let foundHorse = this.horses.find(each => each.getId() === horse.getId());
    if (foundHorse) {
      return false;
    }
    this.horses.push(horse);
    return true;
  }
}
