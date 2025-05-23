import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSearchComponent } from './weather-search.component';

describe('WeatherSearchComponent', () => {
  let component: WeatherSearchComponent;
  let fixture: ComponentFixture<WeatherSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
