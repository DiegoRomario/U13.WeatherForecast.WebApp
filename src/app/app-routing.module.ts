import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastComponent } from './pages/weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/weather-forecast', pathMatch: 'full' },
  { path: 'weather-forecast', component: WeatherForecastComponent },
  { path: '**', component: WeatherForecastComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
