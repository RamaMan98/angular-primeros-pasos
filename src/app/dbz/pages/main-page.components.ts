import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.components.html'
})

export class MainPageComponents{

  constructor(private dbzService: dbzService){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

    onDeleteCharacter( id: string ): void{
      this.dbzService.deleteCharacterById( id )
    }

    onNewCharacter(character: Character): void{
      this.dbzService.AddCharacter(character);
    }

}

