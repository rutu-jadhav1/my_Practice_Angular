import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationComp } from './interpolation-comp';

describe('InterpolationComp', () => {
  let component: InterpolationComp;
  let fixture: ComponentFixture<InterpolationComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
