import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  // votes: number;
  // title: string;
  // link: string;
  // article: Article;

  constructor() {
    // this.title ='Angular 2';
    // this.link = 'http://angular.io';
    // this.votes = 10;
    // this.article = new Article(
    //   'Angular 2',
    //   'http://angular.io'
    // );
  }
  
  voteUp(): boolean {
    // this.article.votes += 1;
    this.article.voteUp();
    return false;
  }
  
  voteDown(): boolean {
    // this.article.votes -= 1;
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
