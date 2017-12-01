import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  // tslint:disable-next-line:one-line
  log(){
    console.log('i am logging ');
   }
  constructor() { }

}
