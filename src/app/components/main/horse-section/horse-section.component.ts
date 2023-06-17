import { Component } from '@angular/core';

@Component({
  selector: 'app-horse-section',
  templateUrl: './horse-section.component.html',
  styleUrls: ['./horse-section.component.scss']
})
export class HorseSectionComponent {
  toggleForm: boolean;

  constructor() {
    this.toggleForm = false;
  }

  onShowForm(): void {
    this.toggleForm = true;
  }

  onHideForm() {
    this.toggleForm = false;
  }
}
