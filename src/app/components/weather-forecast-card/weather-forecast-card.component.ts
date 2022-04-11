import { Component, Input, OnInit } from '@angular/core';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';

@Component({
  selector: 'u13-weather-forecast-card',
  templateUrl: './weather-forecast-card.component.html',
  styleUrls: ['./weather-forecast-card.component.scss']
})
export class WeatherForecastCardComponent {
  @Input() weatherForecast: WeatherForecast;
}
