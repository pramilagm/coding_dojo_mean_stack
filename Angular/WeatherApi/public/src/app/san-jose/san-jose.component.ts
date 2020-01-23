import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-san-jose",
  templateUrl: "./san-jose.component.html",
  styleUrls: ["./san-jose.component.css"]
})
export class SanJoseComponent implements OnInit {
  @Input() weather;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.Weather();
  }
  Weather() {
    let observable = this._httpService.getWeather("san jose");
    observable.subscribe(data => {
      console.log("san hose weather", data);
      this.weather = data;
    });
  }
}
