import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {name: "John"},
    {name: "Kate"},
    {name: "Max"}
  ];

  constructor() { }

  public getAll() {
    return this.users;
  }
}
