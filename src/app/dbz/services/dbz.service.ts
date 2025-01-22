
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class dbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilling',
    power: 100
  },{
    id: uuid(),
    name: 'Goku',
    power: 10000,
  },{
    id: uuid(),
    name: 'Picolo',
    power: 7000
  }]

  AddCharacter( Character: Character ): void{
    const newCharacter: Character = {
      id: uuid(),
      name: Character.name,
      power: Character.power

    }
    this.characters.push(newCharacter)
  }

  // onDeleteCharacter( index:number ){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter (Character => Character.id !== id)
  }

}
