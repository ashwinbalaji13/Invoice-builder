import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatIconModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class MaterialModule { }
