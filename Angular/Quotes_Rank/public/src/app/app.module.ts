import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddAuthorComponent } from "./add-author/add-author.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { FormsModule } from "@angular/forms";
import { ReadComponent } from "./read/read.component";
import { ViewsQuotesComponent } from './views-quotes/views-quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    ReadComponent,
    ViewsQuotesComponent,
    CreateQuoteComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
