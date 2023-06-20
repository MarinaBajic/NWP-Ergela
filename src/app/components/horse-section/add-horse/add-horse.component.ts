import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Breed } from 'src/app/model/breed';
import { Horse } from 'src/app/model/horse';
import { HorseService } from 'src/app/services/horse.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-horse',
  templateUrl: './add-horse.component.html',
  styleUrls: ['./add-horse.component.scss']
})
export class AddHorseComponent {
  horse: Horse;

  horseForm: FormGroup;
  breedKeys = Object.keys(Breed);
  breeds: any = Breed;
  breedValues = Object.values(Breed);

  submited: boolean;

  @Output() hideForm: EventEmitter<void>;

  constructor(private fb: FormBuilder,
              private horseService: HorseService,
              private http: HttpClient,
              private messageService: MessageService) {
    this.hideForm = new EventEmitter<void>();
    this.initializeHorse();
  }

  initializeHorse() {
    this.horse = {
      id: 0,
      shortName: '',
      fullName: '',
      dateOfBirth: 0,
      gender: '',
      breed: Breed.ARABIAN,
      imageUrl: 'assets/horse1.jpg'
    }
  }

  ngOnInit(): void {
    this.submited = false;

    this.horseForm = this.fb.group({
      shortName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      fullName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      dateOfBirth: ['', Validators.required],
      breed: ['', Validators.required],
      gender: ['', Validators.required],
      imageUrl: ['']
    });
  }

  addHorse(horseForm: FormGroup) {
    console.log('Horse: ', horseForm.value);
    if (horseForm.valid) {
      this.horse = {
        id: 0,
        shortName: horseForm.value.shortName,
        fullName: horseForm.value.fullName,
        dateOfBirth: horseForm.value.dateOfBirth,
        gender: horseForm.value.gender,
        breed: horseForm.value.breed,
        imageUrl: 'assets/horse4.jpg'
      }

      this.horseService.addHorse(this.horse)
        .subscribe({
          next: (resp) => {
            console.log("Success: " + resp.msg);
            this.messageService.message = resp.msg;
            this.initializeHorse();
          },
          error: (err: HttpErrorResponse) => {
            this.messageService.message = err.error.msg;
            console.log("Error " + err.error.msg);
          }
        });
      
      this.onHideForm();
    }
    else {
      console.log('Horse form is in an invalid state');
    }
    this.submited = true;
  }

  onHideForm(): void {
    this.hideForm.emit();
  }
}
