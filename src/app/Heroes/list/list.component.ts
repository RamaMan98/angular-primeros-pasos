import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['spiderman','Ironman','She Hulk', 'Thor']
  public deleteHero?: string;

  removeLastHero(): void{
    this.deleteHero = this.heroNames.pop();

  }

}
