import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../core/activities.service';
import { HelperService } from '../core/helper.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [],
})
export class ActivityComponent implements OnInit {
  activity: Activity | undefined;
  activitySlug: string = '';

  constructor(
    activatedRoute: ActivatedRoute,
    activitiesService: ActivitiesService,
    helperService: HelperService
  ) {
    this.activitySlug = helperService.getParamValue(activatedRoute, 'slug');
    this.activity = activitiesService.getActivityBySlug(this.activitySlug);
  }

  ngOnInit(): void {}
}
