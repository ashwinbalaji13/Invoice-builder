import { Component, OnInit, Inject } from "@angular/core";
import { ClientService } from "../../client.service";
import { Client } from "../../models/client";
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ClientFormDialog } from "../client-dialog-form";
import { FormDialogComponent } from "../../form-dialog/form-dialog.component";

@Component({
  selector: "app-client-listing",
  templateUrl: "./client-listing.component.html",
  styleUrls: ["./client-listing.component.scss"]
})
export class ClientListingComponent implements OnInit {
  animal: string;
  name: string;
  constructor(private clientService: ClientService, public dialog: MatDialog) {}
  displayedColumns = ["First Name", "Last Name", "Email"];
  dataSource = new MatTableDataSource<Client>();

  ngOnInit() {
    this.clientService.getClients().subscribe(data => {
      this.dataSource.data = data;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: "400px",
      height: "350px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
