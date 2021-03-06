import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../classes/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { 
    //alert(this.title);
  }

  @Input() CurrrentPost: Post;

  /*@Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: string;*/

  ngOnInit() {
  }

  onPlus() {
    this.CurrrentPost.loveIts++;
  }

  onMoins() {
    this.CurrrentPost.loveIts--;
  }

}
