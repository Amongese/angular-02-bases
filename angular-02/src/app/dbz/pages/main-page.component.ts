import {Component} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {DBZService} from "../service/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class  DbzComponent  {
    constructor(private dbz:DBZService) {}

    get characters():Character[] {
      return [...this.dbz.characters];
    }

    onDeleteCharacter(id:string):void {
      this.dbz.deleteCaracterID(id);
    }

    onNewCharacter (characters:Character):void {
      this.dbz.onNewPersonaje(characters);
    }
}