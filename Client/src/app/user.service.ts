import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "./User";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get("http:localhost:3000/findAll")
    .map(response => response.json());
  }

  addUser(newUser){
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http:localhost:3000/addUser", newUser, {headers: headers})
    .map(response => response.json());
  }

}
