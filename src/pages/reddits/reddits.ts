import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {DetailsPage} from '../details/details';
import {CommentsPage} from '../comments/comments';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class Reddits {
  items: any;
  comments: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {

  }

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    let pic,pic1;
    this.redditService.getPosts().subscribe(response => {
      this.items = response.items;
      if(response.nextPageToken !== '') {
        this.redditService.getNextPage(response.nextPageToken).subscribe(res =>{
          res.items.forEach(item =>{
             this.items.push(item);
        });
        this.items.forEach((item)=>{
        pic= document.createElement('span');
        pic.innerHTML = item.content;
        pic1 = pic.getElementsByTagName("img");
        if(pic1.length == 0){
          pic1[0] = [];
          pic1[0].currentSrc = "https://3.bp.blogspot.com/-zF5anD_kdI4/Vwr71cYb1PI/AAAAAAAAAlM/7sz7l1RyTUwZF0jkVbypdrA-6ZDmgLYJg/s1600/11707306_708992625867303_6048298340019544001_n.jpg";
        } 
            item.pic1 = pic1[0];
        });
      });
      }
    })
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage,{
      item: item
    });
  }

  viewComments(item) {
     this.redditService.getComments(item).subscribe(response => {
       this.comments = response.items;
        this.navCtrl.push(CommentsPage,{
        item: this.comments
      });
     });
  }
}
