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
  oneTask;

  ngOnInit() {}

  allTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data;
      console.log(data["tasks"]);
    });
  }
  showTask(task) {
    let observable = this._httpService.getOneTask(task.id);
    observable.subscribe(data => {
      console.log("Got one task!", data);
      this.oneTask = data;
    });
  }
}
