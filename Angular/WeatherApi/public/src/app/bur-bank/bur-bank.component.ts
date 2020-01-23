import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-bur-bank",
  templateUrl: "./bur-bank.component.html",
  styleUrls: ["./bur-bank.component.css"]
})
export class BurBankComponent implements OnInit {
  @Input() weather;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.Weather();
  }
  Weather() {
    let observable = this._httpService.getWeather("burbank");
    observable.subscribe(data => {
      console.log("burbank weather", data);
      this.weather = data;
    });
  }
}
