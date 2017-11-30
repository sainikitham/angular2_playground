import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [ LoggingService ]
  
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    {
     name:"yoshi",
     belt:"black"
    },
    {
      name:"ryu",
      belt:"red"
     },
     {
      name:"crystal",
      belt:"yellow"
     }
];
  constructor(private _LoggingService : LoggingService) { 
    
  }
  logit(){
    this._LoggingService.log();
  }
  ngOnInit() {
  }

}
