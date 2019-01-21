import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListingComponent } from './component/client-listing/client-listing.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './client.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ClientListingComponent],
  exports:[
    ClientListingComponent
  ],providers:[ClientService]
})
export class ClientModule { }
