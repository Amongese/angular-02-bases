import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironMan';
  public age:number =12;

  get capitalized():string {
    return 'Hola '+this.name.toUpperCase();
  }
  get sumNameAge ():string {
    return this.name+'-'+this.age;
  }

  changeName ():void {
    this.name = 'sergi';
  }

  changeEdad ():void {
    this.age = 37;
  }
  reset ():void {
    this.age = 12;
    this.name = 'ironMan';
  }
}