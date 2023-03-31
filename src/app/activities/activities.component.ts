import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = []; //this.activitiesService.getAllActivities();
  activities$!: Observable<Activity[]>;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.activitiesService.getAllActivities$().subscribe(
      (activities) => {
        this.activities = activities;
      },
      (error) => (this.activities = [])
    );

    this.activities$ = this.activitiesService
      .getAllActivities$()
      .pipe(catchError((error) => of([])));
  }
}
