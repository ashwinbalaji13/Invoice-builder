import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContentComponent } from './component/main-content/main-content.component';
import { DashboardComponent } from './dashboard.component';
import { InvoiceListingComponent } from '../invoices/component/invoice-listing/invoice-listing.component';
import { ClientListingComponent } from '../client/component/client-listing/client-listing.component';

const routes: Routes = [{
  path:'',
  component:DashboardComponent,
  children:[
    {
    path:'',
    component:MainContentComponent    
    },{
      path:'invoice',
      component:InvoiceListingComponent
    },{
      path:'clients',
      component:ClientListingComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
