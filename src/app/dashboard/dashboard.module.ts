import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainContentComponent } from "./component/main-content/main-content.component";
import { SideNavComponent } from "./component/side-nav/side-nav.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { MaterialModule } from "../shared/material.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { InvoicesModule } from "../invoices/invoices.module";
import { ClientModule } from "../client/client.module";
import { HTTP_INTERCEPTORS,  } from "@angular/common/http";
import { HttpInterceptorService } from "../core/service/http-interceptor.service";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, InvoicesModule, ClientModule],
  declarations: [DashboardComponent, MainContentComponent, SideNavComponent, ToolbarComponent],
  providers:[{
    provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true
  }]
})
export class DashboardModule {}
