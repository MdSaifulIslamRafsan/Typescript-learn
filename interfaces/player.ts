import { isPlayer } from "./isPlayer.js";

export class player implements isPlayer{ 
 
    constructor( public name: string,
      public age: number,
      readonly country: string){}
    
    play(){
      console.log(`${this.name} from ${this.country} is playing`)
    }
  }