import { Component, OnInit, Inject } from "@angular/core";
import { ClientService } from "../../client.service";
import { Client } from "../../models/client";
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { ClientFormDialog } from "../client-dialog-form";
import { FormDialogComponent } from "../../form-dialog/form-dialog.component";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/filter";

@Component({
  selector: "app-client-listing",
  templateUrl: "./client-listing.component.html",
  styleUrls: ["./client-listing.component.scss"]
})
export class ClientListingComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  constructor(private clientService: ClientService, private dialog: MatDialog, private snackbar: MatSnackBar) {}
  displayedColumns = ["First Name", "Last Name", "Email", "action"];
  dataSource = new MatTableDataSource<Client>();
  progressBar = false;

  ngOnInit() {
    this.progressBar = true;
    this.clientService.getClients().subscribe(data => {
      this.progressBar = false;

      this.dataSource.data = data;
    }),
      err => {
        this.snackbar.open(err.message, "Failed", {
          duration: 5000
        });
        this.progressBar = false;
      };
  }
  editClient(id) {}
  deleteClient(id) {}

  openDialog(id): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: "400px",
      height: "350px",
      data: { id }
    });

    dialogRef
      .afterClosed()
      .filter(clientParam => clientParam && typeof clientParam === "object")
      .subscribe(result => {
        console.log("The dialog was closed");
        this.progressBar = true;
        this.clientService.postClient(result).subscribe(result => {
          this.dataSource.data.push(result);
          this.progressBar = false;
          this.dataSource.data = [...this.dataSource.data];
          this.snackbar.open("Client Created", "Success", {
            duration: 5000
          });
        }),
          err => {
            this.snackbar.open(err.message, "Failed", {
              duration: 5000
            });
          };
      }),
      () => {
        this.progressBar = false;
      };
  }
}
