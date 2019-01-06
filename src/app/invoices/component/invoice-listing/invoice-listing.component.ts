import { Component, OnInit } from "@angular/core";
import { InvoiceService } from "../../services/invoice.service";
import { Invoice } from "../../models/invoice";
import { Route, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { remove } from "lodash";
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
    this.invoiceService.getInvoices().subscribe(
      data => {
        this.dataSource = data;
        console.log(data);
      },
      err => {
        console.error(err);
      }
    );
  }
  saveNewInvoice() {
    this.route.navigate(["dashboard", "invoice", "new"]);
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
