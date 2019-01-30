import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, LoginRep } from '../model/user';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  login(user:User):Observable<LoginRep>{
    return this.httpClient.post<LoginRep>(`${environment.apiUrl}/users/login`,user);
  }
  signup(user:User):Observable<User>{
    return this.httpClient.post<User>(`${environment.apiUrl}/users/signup`,user);
  }
}
