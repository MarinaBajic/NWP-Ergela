import { Component } from '@angular/core';

@Component({
  selector: 'app-horse-section',
  templateUrl: './horse-section.component.html',
  styleUrls: ['./horse-section.component.scss']
})
export class HorseSectionComponent {
  toggleForm: boolean;
  messageAddHorse: string;

  constructor() {
    this.toggleForm = false;
  }

  onShowForm(): void {
    this.toggleForm = true;
  }

  onHideForm(message: string) {
    this.messageAddHorse = message;
    this.toggleForm = false;
  }
}
