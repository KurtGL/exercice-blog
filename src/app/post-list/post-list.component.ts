import { Component, Input, OnInit } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  les_posts = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

}
