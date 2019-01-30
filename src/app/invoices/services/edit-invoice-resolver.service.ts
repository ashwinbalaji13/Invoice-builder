import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InvoiceService } from './invoice.service';
import { take, map } from 'rxjs/operators';

@Injectable()
export class EditInvoiceResolverService {

  constructor(private invoiceService:InvoiceService,private router:Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    let id=route.paramMap.get('id');
    return this.invoiceService.getInvoiceById(id).pipe(
      take(1),
      map(invoice=>{
        if(invoice){
          return invoice;
        }else{
          this.router.navigate(['dashboard','invoice']);
          return null;
        }
      })
      
    )
  }

}
