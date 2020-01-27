import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.scss"]
})
export class ReadComponent implements OnInit {
  authors: any;
  // editing: boolean;
  edited: any;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      this.authors = data;
    });
  }
  // editForm(author) {
  //   this.editing = true;
  //   this.edited = author;
  // }

  deleteAuthor(_id) {
    let observable = this._httpService.removeAuthor(_id);
    observable.subscribe(data => {
      console.log("data deleted", data);
      this.getAllAuthors();
    });
  }
}
