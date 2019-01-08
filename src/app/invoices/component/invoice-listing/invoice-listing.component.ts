import { Component, OnInit, ViewChild } from "@angular/core";
import { InvoiceService } from "../../services/invoice.service";
import { Invoice } from "../../models/invoice";
import { Route, Router } from "@angular/router";
import { MatSnackBar, MatPaginator } from "@angular/material";
import { remove } from "lodash";
import "rxjs/Rx";

@Component({
  selector: "app-invoice-listing",
  templateUrl: "./invoice-listing.component.html",
  styleUrls: ["./invoice-listing.component.scss"]
})
export class InvoiceListingComponent implements OnInit {
  constructor(
    private invoiceService: InvoiceService,
    private route: Router,
    private snackbar: MatSnackBar
  ) {}
  public responseLength = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [
    "item",
    "date",
    "due",
    "quantity",
    "tax",
    "rate",
    "action"
  ];
  dataSource: Invoice[];

  ngOnInit() {
    this.paginator.page
      .flatMap(result => {
        console.log("inside");
        return this.invoiceService.getInvoices({
          page: result.pageIndex + 1,
          perPage: result.pageSize
        });
      })
      .subscribe(
        data => {
          this.dataSource = data.docs;
          this.responseLength = data.total;
          // console.log(data);
        },
        err => {
          console.error(err);
        }
      );
    this.processInformation();
  }
  saveNewInvoice() {
    this.route.navigate(["dashboard", "invoice", "new"]);
  }
  processInformation() {
    this.invoiceService.getInvoices({ page: 1, perPage: 5 }).subscribe(
      data => {
        console.log("process info");
        this.dataSource = data.docs;
        this.responseLength = data.total;
        // console.log(data);
      },
      err => {
        console.error(err);
      }
    );
  }

  editInvoice(id) {
    this.route.navigate(["dashboard", "invoice", id]);
  }
  deleteInvoice(id) {
    this.invoiceService.deleteInvoice(id).subscribe(
      data => {
        remove(this.dataSource, item => {
          return item._id === data._id;
        });
        this.dataSource = [...this.dataSource];

        this.snackbar.open("Invoice Deleted", "Success", {
          duration: 2000
        });
      },
      err => {
        this.snackbar.open(err.message, "Failed", {
          duration: 2000
        });
      }
    );
  }
}
