import { Component, OnInit } from '@angular/core';
import { Activity } from '../data/activity.type';
import { ACTIVITIES } from '../data/app.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activities: Activity[] = ACTIVITIES.filter((a) => a.state === 'published');
  constructor() {}

  ngOnInit(): void {}
}
