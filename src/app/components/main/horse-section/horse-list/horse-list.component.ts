import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Horse } from 'src/app/model/horse';
import { HorseService } from 'src/app/services/horse.service';

@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrls: ['./horse-list.component.scss']
})
export class HorseListComponent {
  horses: Observable<Horse[]>;
  // horses: Horse[];

  constructor(private horseService: HorseService) {
    this.horses = this.horseService.getHorses();
    // this.horseService.getHorses().subscribe(data => {
    //   this.horses = data;
    // })
  }
}
