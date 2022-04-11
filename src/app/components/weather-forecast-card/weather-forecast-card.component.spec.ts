import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastCardComponent } from './weather-forecast-card.component';

describe('WeatherForecastCardComponent', () => {
  let component: WeatherForecastCardComponent;
  let fixture: ComponentFixture<WeatherForecastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastCardComponent);
    component = fixture.componentInstance;
    component.weatherForecast = {
      number: 1,
      name: "Tonight",
      startTime: new Date(2022,1,1),
      endTime: new Date(2022,1,1),
      isDaytime: false,
      temperature: 52,
      temperatureUnit: "F",
      temperatureTrend: "",
      windSpeed: "6 to 12 mph",
      windDirection: "S",
      icon: "https://api.weather.gov/icons/land/night/bkn?size=medium",
      shortForecast: "Mostly Cloudy",
      detailedForecast: "Mostly cloudy, with a low around 52. South wind 6 to 12 mph, with gusts as high as 18 mph."
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
