import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getWeather(city: string) {
    return this._http.get(
      //for Fahrenheit use &units=imperial and for celcius &units=metric
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=` // appId goes here in APPID=
    );
  }
}
0;
