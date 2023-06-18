import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorseSectionComponent } from '../horse-section/horse-section.component';

describe('HorseSectionComponent', () => {
  let component: HorseSectionComponent;
  let fixture: ComponentFixture<HorseSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorseSectionComponent]
    });
    fixture = TestBed.createComponent(HorseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
