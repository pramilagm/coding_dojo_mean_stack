import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-edit-author",
  templateUrl: "./edit-author.component.html",
  styleUrls: ["./edit-author.component.scss"]
})
export class EditAuthorComponent implements OnInit {
  edited: any = { name: "" };
  editing: boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this._httpService.getAuthor(params.get("id"))
        )
      )
      .subscribe(author => {
        this.edited = author;
      });
  }

  editAuthor(_id) {
    let observable = this._httpService.updateAuthor(_id, this.edited);
    observable.subscribe(data => {
      console.log("data edited ", data);
      this.goHome();
    });
  }
  goHome() {
    this._router.navigate(["/"]);
  }
}
