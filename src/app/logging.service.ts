import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  log(){
    console.log("i am logging ");
   }
  constructor() { }

}
