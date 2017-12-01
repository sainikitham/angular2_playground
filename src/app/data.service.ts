import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  fetchdata()
  // tslint:disable-next-line:one-line
  {
    return this.http.get('https://sampleapp-d254a.firebaseio.com/.json')
          .map((res) => res.json());
  }
}
