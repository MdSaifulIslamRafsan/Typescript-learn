export class player2{ 
 
  
    constructor( private name: string,
      public age: number,
      readonly country: string){}
    
    play(){
      console.log(`${this.name} from ${this.country} is playing`)
    }
    }