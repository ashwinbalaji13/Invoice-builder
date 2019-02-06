import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientListingComponent } from "./component/client-listing/client-listing.component";
import { MaterialModule } from "../shared/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClientService } from "./client.service";
import { ClientFormDialog } from "./component/client-dialog-form";
import { FormDialogComponent } from "./form-dialog/form-dialog.component";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule,ReactiveFormsModule],
  declarations: [ClientListingComponent, ClientFormDialog, FormDialogComponent],

  entryComponents: [FormDialogComponent],
  exports: [ClientListingComponent],
  providers: [ClientService]
})
export class ClientModule {}
