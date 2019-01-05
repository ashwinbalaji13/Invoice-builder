import { Component, OnInit } from "@angular/core";
import { InvoiceService } from "../../services/invoice.service";
import { Invoice } from "../../models/invoice";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-invoice-listing",
  templateUrl: "./invoice-listing.component.html",
  styleUrls: ["./invoice-listing.component.scss"]
})
export class InvoiceListingComponent implements OnInit {
  constructor(private invoiceService: InvoiceService, private route: Router) {}
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
}
