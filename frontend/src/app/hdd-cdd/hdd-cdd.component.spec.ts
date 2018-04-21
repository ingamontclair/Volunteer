import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HddCddComponent } from './hdd-cdd.component';

describe('HddCddComponent', () => {
  let component: HddCddComponent;
  let fixture: ComponentFixture<HddCddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HddCddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HddCddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
