import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "./User";

@Component({
  selector: 'User-Component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[];
  user: User;
  _firstName: string;
  _lastName: string;
  _userType: string;
  _email: string;
  _password: string;
  _bodyTemperature: number;
  _heartRate: number;
  _bloodPressure: number;
  _respiratoryRate: number;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
