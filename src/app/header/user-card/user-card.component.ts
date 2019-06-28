import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectUser(){
    this.userSelected.emit();
  }
}
