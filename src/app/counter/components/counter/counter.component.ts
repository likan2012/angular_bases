//import { Component } from '@angular/core'
//@Component({
  // se debe crear el template
//  selector: 'app-counter', // es como quiero yo utilizar el counter  en el HTML
//  template: '<h1>Hola Counter</h1>'
//})
//export class CounterComponent{
//}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{ counter }} </h3>

    <button (click)="increseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increseBy(1)">+1</button>

  `
})

export class CounterComponent  {
  constructor() { }
  public counter: number =10;

  increseBy(value:number): void{
    this.counter += value;
  }

  reset(): void{
    this.counter = 10;
  }
}
