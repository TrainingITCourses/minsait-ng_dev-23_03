import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  private authorName = 'Alberto Basalo';

  constructor() {}

  ngOnInit(): void {}

  getAuthor() {
    return this.authorName;
  }
}
