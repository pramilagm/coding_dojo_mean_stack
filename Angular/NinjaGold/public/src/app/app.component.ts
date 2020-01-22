import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "public";
  gold: number = 0;
  total = this.gold;
  activities: string[] = [];
  constructor(private _httpService: HttpService) {}
  ngOnInit() {}
  farm() {
    this.gold += Math.floor(Math.random() * (5 - 2)) + 2;
    // this.gold = this._httpService.getGold();
    if (this.gold) {
      this.activities.unshift("you entered the farm and earned " + this.gold);
    }
    this.total += this.gold;
  }
  cave() {
    this.gold += Math.floor(Math.random() * (10 - 5)) + 5;
    // this.gold = this._httpService.getGold();
    if (this.gold) {
      this.activities.unshift("you entered the cave and earned " + this.gold);
    }
    this.total += this.gold;
  }
  casino() {
    this.gold += Math.floor(Math.random() * (100 + 100)) - 100;
    // this.gold = this._httpService.getGold();
    if (this.gold > 0) {
      this.activities.unshift("you entered the casino and earned " + this.gold);
    } else {
      this.activities.unshift("you entered the casino and lose " + this.gold);
    }
    this.total += this.gold;
  }
  house() {
    this.gold += Math.floor(Math.random() * (15 - 7)) + 7;
    // this.gold = this._httpService.getGold();
    if (this.gold) {
      this.activities.unshift(
        ` you entered the casino and earned  ${this.gold} `
      );
    }
    this.total += this.gold;
  }
  reset() {
    this.gold = 0;
    this.activities = [];
  }
}
