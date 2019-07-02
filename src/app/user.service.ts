import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {name: "John"},
    {name: "Kate"},
    {name: "Max"}
  ];

  constructor(private _http: HttpClient) { }

  public getAll() {
    //JSONPlaceholder Fake Online REST API for Testing and Prototyping
    return this._http.get("https://jsonplaceholder.typicode.com/users"); 
  }

  public remove(name: string) {
    return this.users = this.users.filter(user => user.name !== name);
  }

  public add(name: string) {
    this.users.push({name});
  }
}
