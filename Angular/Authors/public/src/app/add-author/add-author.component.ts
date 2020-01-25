import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-author",
  templateUrl: "./add-author.component.html",
  styleUrls: ["./add-author.component.scss"]
})
export class AddAuthorComponent implements OnInit {
  newAuthor = { name: "" };
  errors: any = {};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {}
  addNewAuthor() {
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe((data: any) => {
      if (data.errors) {
        this.errors = data.errors;
      } else {
        console.log("author added ", data);
        this.goToHome();
      }
    });
  }
  goToHome() {
    this._router.navigate(["/"]);
  }
}
