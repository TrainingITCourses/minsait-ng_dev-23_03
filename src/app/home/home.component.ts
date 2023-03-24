import { Component, OnInit } from '@angular/core';
import { Activity } from '../data/activity.type';
import { ACTIVITIES } from '../data/app.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private publishedActivities: Activity[];
  private order = 1;
  private searchTerm = '';
  public activities: Activity[];

  constructor() {
    this.publishedActivities = ACTIVITIES.filter(
      (a) => a.state === 'published'
    );
    this.activities = this.publishedActivities;
  }
  ngOnInit(): void {}

  public onSortClick() {
    this.order = -this.order;
    this.setActivities();
  }

  public onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    this.setActivities();
  }

  private setActivities() {
    this.activities = this.publishedActivities
      .filter((a) =>
        a.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .sort((a, b) => (a.price - b.price) * this.order);
  }
}
