import { Component, OnInit, Input } from '@angular/core';
import { Post} from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
@Input() post: Post;
  ngOnInit() {
  }
getPostColor() {
    if (this.post.loveIts > 0) {return '#bce5bd'; } else if (this.post.loveIts < 0) {return '#f4d2d2'; } else {return 'white'; }
}
getPostClass() {
    if (this.post.loveIts < 0) {return 'text-danger'; }
    else if (this.post.loveIts > 0) {return 'text-success'; }
    else {return 'text-dark'; }
}
}
