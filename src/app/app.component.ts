import { Component, OnInit } from '@angular/core';
import { Post} from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'POSTS';
  posts = new Array<Post>();

  constructor() {
    this.posts.push(new Post('premier post', 'contenu du premier post'));
    this.posts.push(new Post('deuxieme post', 'contenu du deuxieme post'));
    this.posts.push(new Post('troisieme post', 'contenu du troisieme post'));
  }
  ngOnInit() {
  }
}
