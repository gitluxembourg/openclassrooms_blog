import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post} from '../model/post';
import { PostsService} from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        console.log('number of posts : ' + this.posts.length);
      }
    );
    this.postsService.emitPosts();
  }
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
