import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientService } from "../client.service";

@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.scss"]
})
export class FormDialogComponent implements OnInit {
  clientForm: FormGroup;
  title;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private clientService: ClientService,
    private snackbar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.initClientForm();
    this.title=this.data.title;
    if (this.data && this.data.id) {
      this.clientService.getClientById(this.data.id).subscribe(result => {
        debugger;
        this.clientForm.patchValue(result);
      }),
        err => {
          this.snackbar.open(err.message, "Failed", {
            duration: 5000
          });
        };
    }
  }
  private initClientForm() {
    this.clientForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required]
    });
  }
}
