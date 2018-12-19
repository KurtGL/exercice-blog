import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: string;

  ngOnInit() {
  }

  onPlus() {
    this.loveIts++;
  }

  onMoins() {
    this.loveIts--;
  }

}
