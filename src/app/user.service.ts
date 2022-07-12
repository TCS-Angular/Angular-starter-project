import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:3000/users"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: {name:string, city:string, age:number}) {
    return this.http.post(BASE_URL,user)
  }

  constructor(public http : HttpClient) { }
}
