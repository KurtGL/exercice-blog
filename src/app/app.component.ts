import { Component } from '@angular/core';
import { Post } from '../classes/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ListeDesPosts: Post[] = [
    { "title": "Bonjour", "content": "Je m'appelle Marcel et c'est mon premier message. Bisous.", "loveIts": -1, "created_at":new Date("04/30/1980 02:50") }, 
    { "title": "Suite", "content": "Tout va très bien, merci.", "loveIts": 1, "created_at":new Date("04/30/1980 18:25") },
    { "title": "Au fait...", "content": "Ca va ici ?", "loveIts": 0, "created_at":new Date("12/19/2018 12:40") }
  ];

  constructor() {
  }
}
