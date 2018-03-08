import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathervsderivativesComponent } from './weathervsderivatives.component';

describe('WeathervsderivativesComponent', () => {
  let component: WeathervsderivativesComponent;
  let fixture: ComponentFixture<WeathervsderivativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathervsderivativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathervsderivativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
