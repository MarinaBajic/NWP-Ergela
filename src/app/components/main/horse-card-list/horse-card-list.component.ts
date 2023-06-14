import { Component } from '@angular/core';
import { Breed } from 'src/app/model/breed';
import { Horse } from 'src/app/model/horse';

@Component({
  selector: 'app-horse-card-list',
  templateUrl: './horse-card-list.component.html',
  styleUrls: ['./horse-card-list.component.scss']
})
export class HorseCardListComponent {
  horses: Array<Horse>;

  constructor() {
    this.horses = [
      new Horse(1, 'assets/horse1.jpg', Date.now(), 'Thunderbolt', 'Maestro Magelan I', 'm', Breed.Clydesdale),
      new Horse(2, 'assets/horse2.jpg', Date.now(), 'Blossom', 'Maestoso II', 'f', Breed.Mustang)
    ]
  }
}
