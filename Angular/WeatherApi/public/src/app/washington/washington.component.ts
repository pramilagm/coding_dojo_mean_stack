import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-washington",
  templateUrl: "./washington.component.html",
  styleUrls: ["./washington.component.css"]
})
export class WashingtonComponent implements OnInit {
  @Input() weather;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.Weather();
  }
  Weather() {
    let observable = this._httpService.getWeather("washington");
    observable.subscribe(data => {
      console.log("washington weather", data);
      this.weather = data;
    });
  }
}
