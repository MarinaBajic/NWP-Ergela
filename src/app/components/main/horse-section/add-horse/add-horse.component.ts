import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  breeds = Object.values(Breed);

  submited: boolean;
  valid: boolean;
  message: string;

  @Output() hideForm: EventEmitter<boolean>;

  constructor(private fb: FormBuilder, private horseService: HorseService) {
    this.hideForm = new EventEmitter<boolean>();
    this.horse = new Horse(0, 'assets/images/horse1.jpg', 0, '', '', '', Breed.Arabian);
  }

  ngOnInit(): void {
    this.submited = false;
    this.valid = true;

    this.horseForm = this.fb.group({
      shortName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      fullName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      dateOfBirth: ['', Validators.required],
      breed: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  addHorse(horseForm: FormGroup) {
    console.log('Horse: ', horseForm.value);
    if (horseForm.valid) {
      this.submited = true;
      this.valid = true;
      this.onHideForm();

      this.horse = new Horse(
        0,
        'assets/images/horse1.jpg',
        horseForm.value.dateOfBirth,
        horseForm.value.shortName,
        horseForm.value.fullName,
        horseForm.value.gender,
        horseForm.value.breed
      );

      let newHorse = this.horseService.addHorse(this.horse);
      if (newHorse) {
        this.message = 'Successfully added a new horse with id: ' + this.horse.getId();
        this.horse = new Horse(0, 'assets/images/horse1.jpg', 0, '', '', '', Breed.Arabian);
      }
      else {
        this.message = 'Horse with id: ' + this.horse.getId() + ' already exists';
      }
    }
    else {
      this.valid = false;
      console.log('Horse form is in an invalid state');
    }
  }

  onHideForm(): void {
    this.hideForm.emit();
  }
}
