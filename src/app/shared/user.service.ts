import { Injectable } from '@angular/core';
import {User} from './user.model'
import {HttpClient ,HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser : User = {
    name:'',
    email:'',
    password:'',
    avtar:null,

  };

  constructor(private http: HttpClient) { }

  postUser(user: User){
    console.log(user)
    return this.http.post(`${environment.apiBaseUrl}/auth/register`, user)
  }
}
