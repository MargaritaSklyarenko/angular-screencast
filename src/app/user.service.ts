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

  public remove(name: string) {
    return this.users = this.users.filter(user => user.name !== name);
  }

  public add(name: string) {
    this.users.push({name});
  }
}
