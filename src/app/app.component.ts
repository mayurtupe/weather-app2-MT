import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'weather-app';
  weatherData: any;

  constructor(private weatherService: WeatherService,
    private http: HttpClient) { }

  getData(city: any) {
    this.weatherService.getWeatherData(city).subscribe(data => {
      this.weatherData = data
      console.log(this.weatherData);
      

    }

    )
  }
}

