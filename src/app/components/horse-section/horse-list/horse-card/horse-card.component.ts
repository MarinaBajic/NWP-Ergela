import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Horse } from 'src/app/model/horse';
import { HorseService } from 'src/app/services/horse.service';

@Component({
  selector: 'app-horse-card',
  templateUrl: './horse-card.component.html',
  styleUrls: ['./horse-card.component.scss']
})
export class HorseCardComponent {
  @Input() horse: Horse;
  hover: boolean;

  constructor(private horseService: HorseService, private router: Router) { }

  toggleHover() {
    this.hover = !this.hover;
  }

  // deleteHorse(shortName: string) {
  //   this.horseService.deleteHorse(shortName)
  //     .subscribe({
  //       next: (resp) => {
  //         alert('Horse with name ' + shortName + ' successfuly deleted'),
  //         this.router.navigate(['horses']);
  //       },
  //       error: (err) => alert('Something went wrong. Horse with name ' + shortName + ' is NOT deleted.')
  //     });
  // }
}
