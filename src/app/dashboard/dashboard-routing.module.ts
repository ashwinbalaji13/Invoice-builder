import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainContentComponent } from "./component/main-content/main-content.component";
import { DashboardComponent } from "./dashboard.component";
import { InvoiceListingComponent } from "../invoices/component/invoice-listing/invoice-listing.component";
import { ClientListingComponent } from "../client/component/client-listing/client-listing.component";
import { InvoiceFormComponent } from "src/app/invoices/component/invoice-form/invoice-form.component";
import { AuthGuardService } from "../core/service/auth-guard.service";
import { EditInvoiceResolverService } from "../invoices/services/edit-invoice-resolver.service";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate:[AuthGuardService],
    children: [
      // {
      //   path: "",
      //   component: MainContentComponent
      // },
      {
        path: "invoice",
        component: InvoiceListingComponent,
        canActivateChild:[AuthGuardService],
      },
      {
        path: "clients",
        component: ClientListingComponent,
        canActivateChild:[AuthGuardService]
      },
      {
        path: "invoice/new",
        component: InvoiceFormComponent,
        canActivateChild:[AuthGuardService],

      },
      {
        path: "invoice/:id",
        component: InvoiceFormComponent,
        canActivateChild:[AuthGuardService],
        resolve:{
          invoiceValue:EditInvoiceResolverService
        }

      },
      {
        path: "**",
        redirectTo: "invoice",
        canActivateChild:[AuthGuardService],

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
