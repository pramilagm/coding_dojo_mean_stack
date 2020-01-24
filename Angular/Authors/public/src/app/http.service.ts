import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getAuthors() {
    return this._http.get("/authors");
  }
  addAuthor(author) {
    return this._http.post("/author", author);
  }
  updateAuthor(_id, author) {
    return this._http.put("/update/" + _id, author);
  }
  removeAuthor(id) {
    return this._http.delete("/remove/" + id);
    console.log(id);
  }
}
