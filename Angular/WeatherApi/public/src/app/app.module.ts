import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ChicagoComponent } from "./chicago/chicago.component";
import { SanJoseComponent } from "./san-jose/san-jose.component";
import { BurBankComponent } from "./bur-bank/bur-bank.component";
import { DallasComponent } from "./dallas/dallas.component";
import { WashingtonComponent } from "./washington/washington.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent,
    SanJoseComponent,
    BurBankComponent,
    DallasComponent,
    WashingtonComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
