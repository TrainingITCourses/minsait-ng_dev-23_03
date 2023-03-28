import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  activity: Activity | undefined;
  activitySlug: string = '';

  constructor(
    activatedRoute: ActivatedRoute,
    activitiesService: ActivitiesService
  ) {
    this.activitySlug = this.getParamValue(activatedRoute, 'slug');
    this.activity = activitiesService.getActivityBySlug(this.activitySlug);
  }

  ngOnInit(): void {}

  getParamValue(activatedRoute: ActivatedRoute, paramName: string): string {
    return activatedRoute.snapshot.paramMap.get(paramName) || '';
  }
}
