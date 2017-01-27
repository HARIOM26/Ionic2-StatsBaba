import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
    item : any;
    parser:any;
    re:any;
    results:any;
    source:any;
  constructor(public navCtrl: NavController, public params: NavParams) {
        this.item = params.get('item');
        this.parser= document.createElement('span');
        this.parser.innerHTML = this.item.content;
        this.results = this.parser.getElementsByTagName("img"); 
  }

}
