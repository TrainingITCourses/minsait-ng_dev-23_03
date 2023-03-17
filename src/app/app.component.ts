import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private authorName = 'Alberto Basalo';
  title = 'Minsait';

  getAuthor() {
    return this.authorName;
  }
}
