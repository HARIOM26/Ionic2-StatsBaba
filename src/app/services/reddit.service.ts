import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
    http: any;
    baseUrl: String;
    constructor(http: Http) {
        this.http = http;
        this.baseUrl = 'https://www.googleapis.com/blogger/v3/blogs/3828740091172915850/posts?key=AIzaSyAny7aMwqk_b3E5A47SI9svNQNLMWNZSk8';
    }

    getPosts() {
        return this.http.get(this.baseUrl).map(res => res.json());
    }

    getComments(item) {
        return this.http.get(item.replies.selfLink +'?key=AIzaSyAny7aMwqk_b3E5A47SI9svNQNLMWNZSk8').map(res => res.json());
    }

    getNextPage(token) {
        return this.http.get(this.baseUrl + '&pageToken=' + token).map(res => res.json());
    }

} 