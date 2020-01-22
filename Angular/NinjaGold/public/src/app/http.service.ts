import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  gold: number;
  constructor(private _http: HttpClient) {
    this.gold = 0;
  }
  getGold() {
    return this.gold;
  }
}
