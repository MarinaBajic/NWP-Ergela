import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Horse } from 'src/app/model/horse';

@Component({
  selector: 'app-horse-card',
  templateUrl: './horse-card.component.html',
  styleUrls: ['./horse-card.component.scss']
})
export class HorseCardComponent {
  @Input() horse: Horse;
  // @Output() deleteHorse: EventEmitter<Horse>;
  hover: boolean;

  constructor() {
    // this.deleteHorse = new EventEmitter();
  }

  toggleHover() {
    this.hover = !this.hover;
  }
}
