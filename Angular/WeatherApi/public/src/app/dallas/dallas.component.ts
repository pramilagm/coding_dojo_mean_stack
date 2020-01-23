import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-dallas",
  templateUrl: "./dallas.component.html",
  styleUrls: ["./dallas.component.css"]
})
export class DallasComponent implements OnInit {
  @Input() weather;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.Weather();
  }
  Weather() {
    let observable = this._httpService.getWeather("dallas");
    observable.subscribe(data => {
      console.log("dallas weather", data);
      this.weather = data;
    });
  }
}
