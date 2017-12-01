import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [];
  constructor(private _LoggingService: LoggingService, private _DataService: DataService) {

  }
  // tslint:disable-next-line:one-line
  logit(){
    this._LoggingService.log();
  }
  // tslint:disable-next-line:one-line
  fb_postdata(ninja, belt){
    firebase.database().ref('/').push({name: ninja, belt: belt});
  }
  ngOnInit() {
    // this._DataService.fetchdata().subscribe((data) => this.ninjas = data);
    this.fb_fetchdata();
  }
  fb_fetchdata() {
   firebase.database().ref('/').on('child_added', (snapshot) => {
      this.ninjas.push(snapshot.val());
   });
  }

}
