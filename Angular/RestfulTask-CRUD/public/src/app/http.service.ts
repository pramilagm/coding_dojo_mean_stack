import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getTasks() {
    return this._http.get("/tasks");
  }
  // getOneTask(id) {
  //   return this._http.get("/task/" + id);
  // }
  addTask(task) {
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post("/task", task);
  }
  removeTask(id) {
    return this._http.delete("/remove/" + id);
    console.log(id);
  }
  editTask(id, task) {
    return this._http.put("/update/" + id, task);
  }
}
