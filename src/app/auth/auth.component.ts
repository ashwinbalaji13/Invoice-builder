import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../core/service/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor( private fb: FormBuilder,private authService:AuthService) { }

  ngOnInit() {
    this.createForm();
  }
  postData(){
    // console.log(this.authForm.value);
    this.authService.postData(this.authForm.value).subscribe((data)=>{
      console.log(data);
    },(err)=>{
      console.log(err);
    })

  }
  createForm() {
    this.authForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
  
    })
  }
}
