import { Component } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'krilin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ]


  onNewCharacter( character: Character ): void{
    this.characters.push(character);
  }

  onDelete(index: number){
    this.characters.splice(index,1);
  }
}
