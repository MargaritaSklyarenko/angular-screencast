import { Directive, HostBinding, HostListener,  } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  private counter: number = 0;

  // обновление свойств эл-та 
  @HostBinding('style.color') myColor: string;
  // обработка соб-й
  @HostListener('click', ['$event']) changeColor(event) {
    this.setRandomColor();
    this.counter++;
    console.log(this.counter);
  }

  setRandomColor(){
    this.myColor = '#' + Math.floor(Math.random() * 167777215).toString(16);
  }

  constructor() { 
    this.myColor = 'red';
  }

}
