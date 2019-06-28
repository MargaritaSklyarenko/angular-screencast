import { Directive, HostBinding, HostListener,  } from '@angular/core';

@Directive({
  selector: '[appColory]'
})
export class ColoryDirective {

  private counter: number = 0;

  // обновление свойств эл-та 
  @HostBinding('style.color') myColor: string;
  // обработка соб-й
  @HostListener('click', ['$event']) changeColor(event) {
    this.myColor = '#' + Math.floor(Math.random() * 167777215).toString(16);
    this.counter++;
    console.log(this.counter);
  }

  constructor() { 
    this.myColor = 'red';
  }

}
