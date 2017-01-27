import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'comments.html'
})
export class CommentsPage {
    item:any;
  constructor(public navCtrl: NavController,  public params: NavParams) {
             this.item = params.get('item');
  }

}
