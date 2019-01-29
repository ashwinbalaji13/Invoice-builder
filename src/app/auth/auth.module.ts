import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
