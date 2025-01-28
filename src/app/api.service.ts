import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private apiKey = 'ee197a4b155b4d3d843153413241904';

  constructor(private http: HttpClient) { }

  getData(cityName: string): Observable<any> {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${cityName}`;
    return this.http.get<any>(apiUrl);
  }

}
