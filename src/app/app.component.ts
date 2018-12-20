import { Component } from '@angular/core';
import { PosteDeBlog } from '../classes/PosteDeBlog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice-blogxxxx';

  ListeDesPosts: PosteDeBlog[] = [
    { "title": "Bonjour", "content": "Je m'appelle Marcel et c'est mon premier message. Bisous.", "loveIts": -1, "created_at":new Date("04/30/1980") }, 
    { "title": "Suite", "content": "Tout va très bien, merci.", "loveIts": 1, "created_at":new Date("04/30/1980") }
  ];

  constructor() {
  }
}
