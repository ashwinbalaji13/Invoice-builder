import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { InvoiceService } from "../../services/invoice.service";
import { Invoice } from "../../models/invoice";
import { Route, Router } from "@angular/router";
import { MatSnackBar, MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { remove } from "lodash";
import { mergeMap } from "rxjs/operators";
import { merge } from "rxjs/internal/observable/merge";
import { of as observableOf } from "rxjs/observable/of";
import { catchError } from "rxjs/operators/catchError";
import { map } from "rxjs/operators/map";
import { startWith } from "rxjs/operators/startWith";
import { switchMap } from "rxjs/operators/switchMap";
import { Observable } from "rxjs";

@Component({
  selector: "app-invoice-listing",
  templateUrl: "./invoice-listing.component.html",
  styleUrls: ["./invoice-listing.component.scss"]
})
export class InvoiceListingComponent implements OnInit, AfterViewInit {
  constructor(private invoiceService: InvoiceService, private route: Router, private snackbar: MatSnackBar) {}
  public responseLength = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ["item", "date", "due", "quantity", "tax", "rate", "action"];
  // dataSource: Invoice[];
  dataSource = new MatTableDataSource<Invoice>();
  progressBar = true;
  ngOnInit() {}

  ngAfterViewInit() {
    this.progressBar = true;
    merge(this.paginator.page, this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.invoiceService.getInvoices({
            page: this.paginator.pageIndex,
            perPage: this.paginator.pageSize,
            sortItem: this.sort.active,
            sortDirection: this.sort.direction
          });
        }),
        map(data => {
          console.log("events", this.sort.active, data);
          this.responseLength = data.total;
          this.progressBar = false;
          return data.docs;
        }),
        catchError(err => {
          this.errorHandler(err);
          return observableOf([]);
        })
      )
      .subscribe(data => {
        this.dataSource.data = data;
      });

    //     this.paginator.page.pipe(
    //       mergeMap(result => {
    //         this.progressBar=true;
    //         return this.invoiceService.getInvoices({
    //           page: result.pageIndex ,
    //           perPage: result.pageSize,
    //           sortItem:this.sort.active,
    //           sortDirection:this.sort.direction
    //         });
    //       }))
    //       .subscribe(
    //         data => {
    //           this.dataSource = data.docs;
    //           this.responseLength = data.total;
    //             this.progressBar=false;
    //         },
    //         err => {
    //           this.errorHandler(err);
    //         }
    //       );
    //    let sortChangePipe=this.sort.sortChange.pipe(mergeMap((data)=>{
    //     this.paginator.pageIndex=0;
    // return this.invoiceService.getInvoices({ page: this.paginator.pageIndex,
    //    perPage: this.paginator.pageSize,
    //    sortItem:data.active,
    //    sortOrder:data.direction })
    //       }))
    //       sortChangePipe.subscribe(
    //         data => {
    //           console.log("process info");
    //           this.dataSource = data.docs;
    //           this.responseLength = data.total;
    //           this.progressBar=false;
    //         },
    //         err => {
    //           this.errorHandler(err);
    //         }
    //       );
    // this.processInformation();
  }
  saveNewInvoice() {
    this.route.navigate(["dashboard", "invoice", "new"]);
  }
  processInformation(filterText) {
    this.invoiceService
      .filterInvoices({
        page: this.paginator.pageIndex,
        perPage: this.paginator.pageSize,
        sortItem: this.sort.active,
        sortDirection: this.sort.direction,
        filterText
      })
      .subscribe(
        data => {
          console.log("process info");
          this.dataSource.data = data.docs;
          this.responseLength = data.total;
          this.progressBar = false;
        },
        err => {
          this.errorHandler(err);
        }
      );
  }
  filter(event: any) {
    // debugger;
    console.log(event.target.value);
    this.processInformation(event.target.value);
  }
  editInvoice(id) {
    this.route.navigate(["dashboard", "invoice", id]);
  }
  deleteInvoice(id) {
    this.progressBar = true;
    this.invoiceService.deleteInvoice(id).subscribe(
      data => {
        remove(this.dataSource, item => {
          return item._id === data._id;
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
  private errorHandler(error) {
    this.progressBar = false;
    this.snackbar.open(error.message, "Failed", {
      duration: 2000
    });
  }
}
