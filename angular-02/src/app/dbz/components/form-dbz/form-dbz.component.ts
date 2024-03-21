import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'form-dbz',
  templateUrl: './form-dbz.component.html',
  styleUrl: './form-dbz.component.css'
})
export class FormDbzComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter<Character>();

  public character:Character = {
    name:'',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character)
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
  }
}