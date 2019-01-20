import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainContentComponent } from "./component/main-content/main-content.component";
import { DashboardComponent } from "./dashboard.component";
import { InvoiceListingComponent } from "../invoices/component/invoice-listing/invoice-listing.component";
import { ClientListingComponent } from "../client/component/client-listing/client-listing.component";
import { InvoiceFormComponent } from "src/app/invoices/component/invoice-form/invoice-form.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      // {
      //   path: "",
      //   component: MainContentComponent
      // },
      {
        path: "invoice",
        component: InvoiceListingComponent
      },
      {
        path: "clients",
        component: ClientListingComponent
      },
      {
        path: "invoice/new",
        component: InvoiceFormComponent
      },
      {
        path: "invoice/:id",
        component: InvoiceFormComponent
      },
      {
        path: "**",
        redirectTo: "invoice"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
