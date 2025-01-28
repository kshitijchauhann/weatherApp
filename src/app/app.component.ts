import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [APIService] // Fixed typo from 'provider' to 'providers' and removed provideHttpClient
})
export class AppComponent {
  title = 'weatherApp';
  cityName: string = '';
  isDarkTheme = false;
  weatherData: any;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  constructor(private apiService: APIService) {}

  fetchWeather() {
    this.apiService.getData(this.cityName).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
