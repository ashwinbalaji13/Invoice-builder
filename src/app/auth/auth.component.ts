import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../core/service/auth.service';
import { JwtService } from '../core/jwt.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  title;
  progressBar = false;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private jwtService: JwtService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.createForm();
    this.title = this.router.url === '/login' ? 'Login' : 'Signup'
  }
  postData() {
    this.progressBar = true;
    if (this.title === 'Login') {
      this.authService.login(this.authForm.value).subscribe((data) => {
        console.log(data);
        this.jwtService.setToken(data.token)
        this.router.navigate(['/dashboard', 'invoices']);
      }, (err) => {
        console.log(err);
      })
    } else if (this.title === 'Signup') {
      this.authService.signup(this.authForm.value).subscribe((data) => {
        this.snackBarHandler("User Created", {});
        this.router.navigate(['/login'])
      }, (err) => {
        this.snackBarHandler("Error while creating user", err);
      })
    }


  }
  createForm() {
    this.authForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],

    })
  }
  googleSignin() {
    this.authService.googleAuth().subscribe(data => {
      console.log(data);
    }, (err) => {
      this.snackBarHandler("Error while sign in google", err);
    })
  }
  private snackBarHandler(message, error) {
    this.progressBar = false;
    message = error.message ? error.message : message;
    console.log(message);
    this.snackbar.open(message, "Failed", {
      duration: 10000
    });
  }
}
