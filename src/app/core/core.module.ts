import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { JwtService } from './jwt.service';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { AuthGuardService } from './service/auth-guard.service';
import { NoAuthGuardService } from './service/no-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,HttpClientModule
  ],
  declarations: [],
  providers:[AuthService,JwtService,HttpInterceptorService,AuthGuardService,NoAuthGuardService]
})
export class CoreModule { }
