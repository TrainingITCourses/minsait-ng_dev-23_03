import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.css'],
})
export class CopyRightComponent implements OnInit {
  year = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
