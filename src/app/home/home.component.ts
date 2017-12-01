import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ninja directory';

  // tslint:disable-next-line:one-line
  constructor(private _LoggingService: LoggingService) { }

  // tslint:disable-next-line:one-line
  logit(){
    this._LoggingService.log();
  }

  ngOnInit() {
  }

}
