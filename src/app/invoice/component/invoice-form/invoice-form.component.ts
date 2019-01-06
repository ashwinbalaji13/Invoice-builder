import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InvoiceService } from "src/app/invoices/services/invoice.service";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
  selector: "app-invoice-form",
  templateUrl: "./invoice-form.component.html",
  styleUrls: ["./invoice-form.component.scss"]
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private snackbar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }
  postData() {
    this.invoiceService.postInvoices(this.invoiceForm.value).subscribe(
      data => {
        this.snackbar.open("Invoice Created", "Success", {
          duration: 2000
        });
        this.invoiceForm.reset();
        console.log(data);
        this.route.navigate(["dashboard", "invoice"]);
      },
      err => {
        this.snackbar.open(err.message, "Failed", {
          duration: 5000
        });
        console.error(err);
      }
    );
    console.log(JSON.stringify(this.invoiceForm.value));
  }
  createForm() {
    this.invoiceForm = this.fb.group({
      item: ["", Validators.required],
      date: ["", Validators.required],
      due: ["", Validators.required],
      qty: "",
      rate: "",
      tax: ""
    });
  }
}
