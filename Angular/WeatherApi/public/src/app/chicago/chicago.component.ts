import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-chicago",
  templateUrl: "./chicago.component.html",
  styleUrls: ["./chicago.component.css"]
})
export class ChicagoComponent implements OnInit {
  @Input() weather;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.chicagoWeather();
  }
  chicagoWeather() {
    let observable = this._httpService.getWeather("chicago");
    observable.subscribe(data => {
      console.log("chicago weather", data);
      this.weather = data;
    });
  }
}
