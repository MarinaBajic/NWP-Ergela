import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Breed } from 'src/app/model/breed';
import { Horse } from 'src/app/model/horse';

@Component({
  selector: 'app-horse-card',
  templateUrl: './horse-card.component.html',
  styleUrls: ['./horse-card.component.scss']
})
export class HorseCardComponent {
  @Input() horse: Horse;

  hover: boolean;

  @Output() deleteHorse: EventEmitter<Horse>;

  constructor() {
    this.deleteHorse = new EventEmitter();
  }

  toggleHover() {
    this.hover = !this.hover;
    console.log("rgv");
  }

  get id(): number {
    return this.horse.getId();
  }

  get imageUrl(): string {
    return this.horse.getImageUrl();
  }

  get dateOfBirth(): number {
    return this.horse.getDateOfBirth();
  }

  get shortName(): string {
    return this.horse.getShortName();
  }

  get fullName(): string {
    return this.horse.getFullName();
  }

  get gender(): string {
    return this.horse.getGender();
  }

  get breed(): Breed {
    return this.horse.getBreed();
  }
}
