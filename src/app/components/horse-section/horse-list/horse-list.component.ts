import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Horse } from 'src/app/model/horse';
import { AuthService } from 'src/app/services/auth.service';
import { HorseService } from 'src/app/services/horse.service';

@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrls: ['./horse-list.component.scss']
})
export class HorseListComponent implements OnInit {
  horses: Observable<Horse[]>;

  constructor(private horseService: HorseService, private authService: AuthService) {
    // this.horses = this.horseService.getHorses();
  }

  ngOnInit() {
    this.fetchHorses();
  }

  fetchHorses() {
    this.horses = this.horseService.getHorses();
  }

  // setAuthToken() {
  //   this.authService.authToken = 'TESTING';
  // }

  // resetAuthToken() {
  //   this.authService.authToken = undefined;
  // }

  // makeFailingCall() {
  //   this.horseService.makeFailingCall().subscribe({
  //     next: (res) => console.log('Successfully made failing call', res),
  //     error: (err) => console.error('Error making failing call', err)
  //   });
  // }

}
