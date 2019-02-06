import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvoiceListingComponent } from "./component/invoice-listing/invoice-listing.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";
import { InvoiceService } from "./services/invoice.service";
import { InvoiceFormComponent } from "src/app/invoices/component/invoice-form/invoice-form.component";
import { EditInvoiceResolverService } from "./services/edit-invoice-resolver.service";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  exports: [InvoiceListingComponent],
  providers: [InvoiceService,EditInvoiceResolverService]
})
export class InvoicesModule {}
