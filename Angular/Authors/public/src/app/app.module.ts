import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddAuthorComponent } from "./add-author/add-author.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";

@NgModule({
  declarations: [AppComponent, AddAuthorComponent, EditAuthorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
