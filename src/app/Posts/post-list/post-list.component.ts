import { Component, Input } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{

  // posts = [
  //   {title: "First Post", content: "Content"},
  //   {title: "Second Post", content: "Content"}
  // ];
  @Input() posts: Post[] = [];


}
