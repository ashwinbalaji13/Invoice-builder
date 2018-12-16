import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { InvoiceBuilderComponent } from './invoice-builder/invoice-builder.component';
import {AppRoutingModule} from './invoice-builder/app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    InvoiceBuilderComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
