import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { ErroHandlerService } from 'src/app/services/erro-handler.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';

@Component({
  selector: 'u13-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  gridColumns: number = 7;
  data: WeatherForecast[] = [];

  constructor(
    private weatherForecastService: WeatherForecastService,
    private spinnerService: SpinnerService,
    private erroHandlerService: ErroHandlerService
  ) {}
  ngOnInit(): void {}

  GetWeatherForecast(address: string) {
    this.spinnerService.show();
    this.data = [];
    this.weatherForecastService
      .getWeatherForecast(address)
      .pipe(
        finalize(() => {
          this.spinnerService.hide();
        })
      )
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (data) => {
          this.erroHandlerService.handleError(data);
        },
      });
  }

}
