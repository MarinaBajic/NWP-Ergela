import { Component } from '@angular/core';
import { Breed } from 'src/app/model/breed';
import { Horse } from 'src/app/model/horse';
import { HorseService } from 'src/app/services/horse.service';

@Component({
  selector: 'app-horse-card-list',
  templateUrl: './horse-card-list.component.html',
  styleUrls: ['./horse-card-list.component.scss']
})
export class HorseCardListComponent {
  horses: Array<Horse>;

  constructor(private horseService: HorseService) {
    this.horses = horseService.getHorses();
    // this.showHorses();

    console.log(this.horses);
  }

  // showHorses() {
  //   this.horseService.getHorsesFile()
  //     .subscribe((data: Horse) => this.horses.push(
  //       new Horse(
  //         data.getId(),
  //         data.getImageUrl(),
  //         data.getDateOfBirth(),
  //         data.getShortName(),
  //         data.getFullName(),
  //         data.getGender(),
  //         data.getBreed()
  //       )
  //     ));
  // }
}
