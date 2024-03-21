import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';


@Injectable({providedIn:'root'})
export class DBZService {

  public characters:Character[] = [
    {
      id: uuid(),
      name:'Kriling',
      power: 1000
    },
    {
      id: uuid(),
      name:'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name:'Vegeta',
      power: 12000
    },

  ];

  onNewPersonaje (character:Character):void {

    const newID:Character = {
      id: uuid(),
      ...character
    }

    this.characters.push(newID);
  }

  deleteCaracterID (id:string) {
    this.characters = this.characters.filter( character => character.id !== id);
  }

  constructor() {
  }
}