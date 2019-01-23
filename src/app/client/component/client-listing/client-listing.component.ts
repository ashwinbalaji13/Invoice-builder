import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../client.service";
import { Client } from "../../models/client";
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { ClientFormDialog } from "../client-dialog-form";
import { FormDialogComponent } from "../../form-dialog/form-dialog.component";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/filter";
import { remove } from "lodash";

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
  clientId;
  deleteClient(id) {
    this.progressBar = true;
    this.clientService.deleteClient(id).subscribe(
      result => {
        const removedItems = remove(this.dataSource.data, item => {
          return item._id === result._id;
        });
        this.dataSource.data = [...this.dataSource.data];
        this.progressBar = false;
        this.snackbar.open("Invoice Deleted", "Success", {
          duration: 2000
        });
      },
      err => {
        this.errorHandler(err);
      }
    );
  }

  openDialog(clientId): void {
    let option = {
      width: "400px",
      height: "350px",
      data: { id: "", title: "New Client" }
    };
    if (clientId) {
      option.data = { id: clientId, title: "Update Client Details" };
    }
    const dialogRef = this.dialog.open(FormDialogComponent, option);
    dialogRef
      .afterClosed()
      .filter(clientParam => clientParam && typeof clientParam === "object")
      .flatMap(result => {
        this.progressBar = true;
        return clientId ? this.clientService.updateClient(clientId, result) : this.clientService.postClient(result);
      })
      .subscribe(
        client => {
          let successMsg = "";
          if (clientId) {
            const index = this.dataSource.data.findIndex(client => client._id === clientId);
            this.dataSource.data[index] = client;
            successMsg = "Client updated";
          } else {
            this.dataSource.data.push(client);
            successMsg = "Client created";
          }
          this.progressBar = false;
          this.dataSource.data = [...this.dataSource.data];
          this.snackbar.open(successMsg, "Success", {
            duration: 2000
          });
        },
        err => this.errorHandler(err)
      );
  }
  // dialogRef
  //   .afterClosed()
  //   .filter(clientParam => clientParam && typeof clientParam === "object")
  //   .subscribe(result => {
  //     console.log("The dialog was closed");
  //     this.progressBar = true;
  //     if(clientId){
  //       this.clientService.updateClient(clientId,result).subscribe(result => {
  //         const index=this.dataSource.data.findIndex(result=>result._id===clientId)
  //         this.dataSource.data[index]=result;
  //         this.progressBar = false;
  //         this.dataSource.data = [...this.dataSource.data];
  //         this.snackbar.open("Client Updated", "Success", {
  //           duration: 5000
  //         });
  //       }),
  //         err => {
  //           this.snackbar.open(err.message, "Failed", {
  //             duration: 5000
  //           });
  //         };
  //     }else{
  //       this.clientService.postClient(result).subscribe(result => {
  //         this.dataSource.data.push(result);
  //         this.progressBar = false;
  //         this.dataSource.data = [...this.dataSource.data];
  //         this.snackbar.open("Client Created", "Success", {
  //           duration: 5000
  //         });
  //       }),
  //         err => {
  //           this.snackbar.open(err.message, "Failed", {
  //             duration: 5000
  //           });
  //         };
  //     }

  //   }),
  //   () => {
  //     this.progressBar = false;
  //   };

  // }
  private errorHandler(error) {
    this.progressBar = false;
    this.snackbar.open(error.message, "Failed", {
      duration: 2000
    });
  }
}
