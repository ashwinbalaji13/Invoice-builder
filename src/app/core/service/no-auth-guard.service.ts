import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class NoAuthGuardService implements CanActivate{
  canActivate():boolean{
  debugger;
    return true;
  }
  constructor() { }
}
