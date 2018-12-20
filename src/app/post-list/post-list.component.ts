import { Component, Input, OnInit } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { Post } from '../../classes/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //@Input() NouveauPost: Post;
  @Input() LesPosts: Post[];

  constructor() {
    //this.NouveauPost = new Post();
   }

  ngOnInit() {
  }

  /*onAjout() {
    var newPoste = new Post();
    newPoste.title=this.NouveauPost.title;
    newPoste.content=this.NouveauPost.content;

    var date = new Date();
    this.LesPosts.unshift(newPoste);
  }*/

}
