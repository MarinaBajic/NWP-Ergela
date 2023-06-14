import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseCardListComponent } from './horse-card-list.component';

describe('HorseCardListComponent', () => {
  let component: HorseCardListComponent;
  let fixture: ComponentFixture<HorseCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorseCardListComponent]
    });
    fixture = TestBed.createComponent(HorseCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
