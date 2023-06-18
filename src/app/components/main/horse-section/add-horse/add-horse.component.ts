import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Breed } from 'src/app/model/breed';
import { Horse } from 'src/app/model/horse';
import { HorseService } from 'src/app/services/horse.service';

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
  allFieldsValid: boolean;
  message: string;

  @Output() hideForm: EventEmitter<string>;

  constructor(private fb: FormBuilder, private horseService: HorseService, private http: HttpClient) {
    this.hideForm = new EventEmitter<string>();
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
    this.allFieldsValid = true;

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
        imageUrl: 'assets/horse2.jpg'
      }

      let newHorse = this.horseService.addHorse(this.horse)
        .subscribe({
          next: (result: any) => {
            this.message = result.message;
            this.initializeHorse();
          },
          error: (err) => this.message = err.message
        });
      if (newHorse) {
        this.message = 'Successfully added a new horse with id: ' + this.horse.id;
      }
      else {
        this.message = 'Horse with id: ' + this.horse.id + ' already exists';
      }

      this.submited = true;
      this.allFieldsValid = true;
      this.onHideForm();
    }
    else {
      this.allFieldsValid = false;
      console.log('Horse form is in an invalid state');
    }
  }

  onHideForm(): void {
    this.hideForm.emit(this.message);
  }

}
