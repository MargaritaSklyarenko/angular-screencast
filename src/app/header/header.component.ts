import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public x = 5;
  public myclass = 'red';
  public mycolor = 'red';
  public isShown = true;
  public selectedUser;
  public user = {
    name: "John"
  };
  public users;

  // Dependency ingection
  //private _userService;
  //constructor(userService: UserService) { 
    //this._userService = userService;
  //More short way
  constructor(private _userService: UserService) { 
    setTimeout(() => {
      this.myclass='green';
    }, 2000);
  }

  ngOnInit() {
    this.getUsers();
  }

  changeColor(color: string) {
    this.mycolor=color;
  }

  removeUser(name: string) {
    this._userService.remove(name);
    this.getUsers();
  }

  addUser(name: string) {
    if(!name)
      return;

    this._userService.add(name);
    this.getUsers();
  }

  getUsers() {
    this.users = this._userService.getAll();
  }
}
