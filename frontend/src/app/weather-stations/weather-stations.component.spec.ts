import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStationsComponent } from './weather-stations.component';

describe('WeatherStationsComponent', () => {
  let component: WeatherStationsComponent;
  let fixture: ComponentFixture<WeatherStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
