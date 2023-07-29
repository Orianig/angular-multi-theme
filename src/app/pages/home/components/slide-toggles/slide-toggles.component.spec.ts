import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTogglesComponent } from './slide-toggles.component';

describe('SlideTogglesComponent', () => {
  let component: SlideTogglesComponent;
  let fixture: ComponentFixture<SlideTogglesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideTogglesComponent]
    });
    fixture = TestBed.createComponent(SlideTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
