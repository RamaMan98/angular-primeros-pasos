
import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: false,

  template: `
     <h3>counter: {{counter}} </h3>


    <button (click)="increaseBy(+1)" >1</button>
    <button (click)="Reset()">Reset</button>
    <button (click)="increaseBy(-1)" >-1</button>

  `
})

export class CounterConponent {
  public counter: number = 10;

  increaseBy(value: number): void{
    this.counter +=value;
  }
  Reset(): void{
    this.counter =10
  }
  constructor() { }


}
