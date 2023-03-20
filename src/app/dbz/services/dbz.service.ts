import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]


  addCharacter( character: Character ): void{
    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter( charcater => charcater.id !== id );
  }
  constructor() { }
}
