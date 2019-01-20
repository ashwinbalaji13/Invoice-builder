import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvoiceListingComponent } from "./component/invoice-listing/invoice-listing.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";
import { InvoiceService } from "./services/invoice.service";
import { HttpClientModule } from "@angular/common/http";
import { InvoiceFormComponent } from "src/app/invoices/component/invoice-form/invoice-form.component";

@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  exports: [InvoiceListingComponent],
  providers: [InvoiceService]
})
export class InvoicesModule {}
