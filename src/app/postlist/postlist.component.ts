import { Component, OnInit, Input } from '@angular/core';
import { Post} from '../model/post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor() { }
  @Input() posts: Post[];
  ngOnInit() {
  }

}
