import { Component, OnInit } from '@angular/core';

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
  public users = [
    {name: "John"},
    {name: "Kate"},
    {name: "Max"}
  ];
  constructor() { 
    setTimeout(() => {
      this.myclass='green';
    }, 2000);
  }

  ngOnInit() {
  }

  changeColor(color) {
    this.mycolor=color;
  }

}
