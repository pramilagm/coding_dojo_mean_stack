import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { switchMap } from "rxjs/operators";
import { ParamMap, ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-views-quotes",
  templateUrl: "./views-quotes.component.html",
  styleUrls: ["./views-quotes.component.scss"]
})
export class ViewsQuotesComponent implements OnInit {
  showAuthor: any;

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
        this.showAuthor = author;
      });
  }
  Vote(num, quote_id) {
    let obs = this._httpService.castVote(num, quote_id);
    obs.subscribe(data => {});
  }
}
