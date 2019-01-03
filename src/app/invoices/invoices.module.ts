import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvoiceListingComponent } from "./component/invoice-listing/invoice-listing.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";
import { InvoiceService } from "./services/invoice.service";
import { HttpClient } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [InvoiceListingComponent],
  exports: [InvoiceListingComponent],
  providers: [InvoiceService, HttpClient]
})
export class InvoicesModule {}
