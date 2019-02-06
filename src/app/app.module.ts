import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "./core/service/http-interceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,AuthModule,CoreModule,HttpClientModule
  ],
  providers:[{
    provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
