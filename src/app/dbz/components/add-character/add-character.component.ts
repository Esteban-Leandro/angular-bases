import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Character } from './../../interfaces/character';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  public character!: Character

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  ngOnInit(): void {
    this.initCharacter();  
  }

  initCharacter(): void{
    this.character = { name: '', power:0, }
  }

  emitCharacter(){
    this.onNewCharacter.emit(this.character);
    this.initCharacter(); 
  }
}
