import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatIconModule} from '@angular/material'
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatSidenavModule

  ],
  declarations: []
})
export class MaterialModule { }
