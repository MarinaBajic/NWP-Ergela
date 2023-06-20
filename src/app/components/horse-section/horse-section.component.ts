import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-horse-section',
  templateUrl: './horse-section.component.html',
  styleUrls: ['./horse-section.component.scss']
})
export class HorseSectionComponent {
  toggleForm: boolean;

  constructor(public messageService: MessageService) {
    this.toggleForm = false;
  }

  onShowForm(): void {
    this.toggleForm = true;
  }

  onHideForm() {
    this.toggleForm = false;
  }
}
