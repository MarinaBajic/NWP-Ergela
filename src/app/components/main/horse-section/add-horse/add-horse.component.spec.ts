import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHorseComponent } from './add-horse.component';

describe('AddHorseComponent', () => {
  let component: AddHorseComponent;
  let fixture: ComponentFixture<AddHorseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHorseComponent]
    });
    fixture = TestBed.createComponent(AddHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
