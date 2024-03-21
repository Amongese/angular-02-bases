import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css'
})


export class ListDbzComponent {
  @Input()
  public characterList:Character[] = [
    {
      name:'Trunk',
      power:500
    }
  ]

  @Output()
  public onDeletedId:EventEmitter<string> = new EventEmitter<string>();


  onDeleteCharacter(id?:string):void {

    if (!id) return;
    this.onDeletedId.emit(id);
  }
}