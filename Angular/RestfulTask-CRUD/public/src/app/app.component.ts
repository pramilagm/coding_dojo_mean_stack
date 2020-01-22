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
  editTask;
  newTask = { title: "", des: "" };
  editing: boolean;
  // slouching
  ngOnInit() {}

  allTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data;
      console.log(data["tasks"]);
    });
  }
  viewOneTask(task) {
    console.log("show one task", task);
    this.showTask = task;
  }
  addnewTask() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Task addedS!!!!", data);
      this.allTasks();
    });
  }
  destroyTask(task) {
    console.log(task.id);
    let observable = this._httpService.removeTask(task._id);
    observable.subscribe(data => {
      console.log("task removes", data);
      this.allTasks();
    });
  }
  editForm(task) {
    this.editing = true;
    this.editTask = task;
  }
  updateOneTask(task) {
    console.log(task._id);
    let observable = this._httpService.editTask(task._id, task);
    observable.subscribe(data => {
      console.log("task update", data);
    });
    // this.allTasks();
  }
}
