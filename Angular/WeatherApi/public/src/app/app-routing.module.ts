import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChicagoComponent } from "./chicago/chicago.component";
import { SanJoseComponent } from "./san-jose/san-jose.component";
import { BurBankComponent } from "./bur-bank/bur-bank.component";
import { DallasComponent } from "./dallas/dallas.component";
import { WashingtonComponent } from "./washington/washington.component";

import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: "chicago", component: ChicagoComponent },
  { path: "sanjose", component: SanJoseComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: "dallas", component: DallasComponent },
  { path: "burbank", component: BurBankComponent },
  { path: "dc", component: WashingtonComponent },
  // redirect to /alpha if there is nothing in the url
  { path: "", pathMatch: "full", redirectTo: "/" }
  // the ** will catch anything that did not match any of the above routes
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
