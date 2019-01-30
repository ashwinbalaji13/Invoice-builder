import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,ReactiveFormsModule,RouterModule,MaterialModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
