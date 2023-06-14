import { Component, Input } from '@angular/core';
import { Horse } from 'src/app/model/horse';

@Component({
  selector: 'app-horse-card',
  templateUrl: './horse-card.component.html',
  styleUrls: ['./horse-card.component.scss']
})
export class HorseCardComponent {
  @Input() horse: Horse;
}
