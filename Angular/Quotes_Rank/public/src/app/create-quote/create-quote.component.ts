import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-create-quote",
  templateUrl: "./create-quote.component.html",
  styleUrls: ["./create-quote.component.scss"]
})
export class CreateQuoteComponent implements OnInit {
  newQuote: any = { quote_name: "", vote: "" };
  author: any;
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
        this.author = author;
      });
  }
  createNewQuote(id) {
    console.log(this.author.newQuote);
    let observable = this._httpService.addQuote(id, this.newQuote);
    observable.subscribe(data => {
      console.log("data created", data);
      this.newQuote = { quote_name: "", vote: "" };
      console.log(this.author.newQuote);
    });
  }
}
