import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit {
  protected items: FirebaseListObservable<any[]>;
  constructor(protected af: AngularFire) {
   
  }

  ngOnInit() {
     this.items = this.af.database.list('/items');
  }

}
