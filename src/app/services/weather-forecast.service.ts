import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../models/weather-forecast.model';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class WeatherForecastService {
    constructor(private http: HttpClient) {}

    getWeatherForecast(address: string): Observable<WeatherForecast[]> {
        let endpointUrl = `${environment.getWeatherForecastByAddressUrl}${address}`
        return this.http.get<WeatherForecast[]>(endpointUrl);
    }
}
