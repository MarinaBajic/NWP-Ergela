import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSectionComponent } from './about-us-section.component';

describe('AboutUsSectionComponent', () => {
  let component: AboutUsSectionComponent;
  let fixture: ComponentFixture<AboutUsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsSectionComponent]
    });
    fixture = TestBed.createComponent(AboutUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
