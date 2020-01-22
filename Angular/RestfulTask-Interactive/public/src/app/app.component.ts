import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "my first Angular App";
  constructor(private _httpService: HttpService) {}
  tasks: any = "";
  showTask;

  ngOnInit() {}

  allTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data;
    });
  }
  getOneTask(task) {
    this.showTask = task;
  }
}
