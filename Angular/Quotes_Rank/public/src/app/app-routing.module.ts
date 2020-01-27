import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddAuthorComponent } from "./add-author/add-author.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { ReadComponent } from "./read/read.component";
import { ViewsQuotesComponent } from "./views-quotes/views-quotes.component";
import { CreateQuoteComponent } from "./create-quote/create-quote.component";

const routes: Routes = [
  { path: "", component: ReadComponent },
  { path: "new", component: AddAuthorComponent },
  { path: "edit/:id", component: EditAuthorComponent },
  { path: "quotes/:id", component: ViewsQuotesComponent },
  { path: "write/:id", component: CreateQuoteComponent },
  // use a colon and parameter name to include a parameter in the url
  // redirect to /alpha if there is nothing in the url
  { path: "", pathMatch: "full", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
