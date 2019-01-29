import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import {environment} from '../../../environments/environment'
@Injectable()
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  postData(user:User){
    return this.httpClient.post<User>(`${environment.apiUrl}/users/login`,user);
  }
}
