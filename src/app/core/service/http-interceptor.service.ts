import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../jwt.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private jwtService:JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let headers_config={'content-type':'application/json',
    'Accept':'application/json'} 
      let token=this.jwtService.getToken();     
      if(token){
        headers_config["Authorization"]=`Bearer ${token}`;
      }
      let _req=req.clone({
        // headers: req.headers.append('Authorization', 'Bearer ' + token)
        setHeaders:headers_config
      })
      return next.handle(_req)
    }

}
