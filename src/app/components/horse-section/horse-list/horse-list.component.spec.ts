import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseListComponent } from './horse-list.component';

describe('HorseListComponent', () => {
  let component: HorseListComponent;
  let fixture: ComponentFixture<HorseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorseListComponent]
    });
    fixture = TestBed.createComponent(HorseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
