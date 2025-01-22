import { Component } from '@angular/core';

@Component({
  // app-heroes-list
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iron man';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  gerHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }


  changeHero(): void{
    this.name= 'Spiderman'
  }

  changeAge(): void{
    this.age= 25
  }

  resetForm(): void {
   this.name = 'ironman'
    this.age = 45

    //document.querySelectorAll('h1')!.forEach( element => {
     // element.innerHTML = '<h1>Desde angular</h1>'
    //} );
  }
}
