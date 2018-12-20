import { Component, Input, OnInit } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { PosteDeBlog } from '../../classes/PosteDeBlog';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //ttt: PosteDeBlog;
  @Input() NouveauPost: PosteDeBlog;
  @Input() LesPosts: PosteDeBlog[];

  /*les_posts2: PosteDeBlog[] = [
    { "title": "0", "content": "salut", "loveIts": 0, "created_at":new Date("10/01/1980") }, 
    { "title": "1", "content": "comment ca va ?", "loveIts": 0, "created_at":new Date("04/30/1980") }
  ];*/

  /*les_posts = [
    {
      title: 'a',
      content: 'b',
      loveIts: 0,
      created_at: 'd'
    },
    {
      title: 'e',
      content: 'f',
      loveIts: 1,
      created_at: 'h'
    },
    {
      title: 'i',
      content: 'j',
      loveIts: 3,
      created_at: 'l'
    }
  ];*/

  constructor() {
    this.NouveauPost = new PosteDeBlog();
   }

  ngOnInit() {
  }

  onAjout() {
    var newPoste = new PosteDeBlog();

    newPoste.title=this.NouveauPost.title;
    newPoste.content=this.NouveauPost.content;
    newPoste.loveIts=0;

    var date = new Date();
    this.LesPosts.unshift(newPoste);
    //this.les_posts.push({"title":"z", "content":"z", "loveIts":3, "created_at":"date"});
    //this.les_posts2.push({"title":"z", "content":"z", "loveIts":3, "created_at":new Date("04/30/1980")})
  }

}
