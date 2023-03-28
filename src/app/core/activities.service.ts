import { Injectable } from '@angular/core';
import { ACTIVITIES } from '../data/app.data';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  getAllActivities() {
    return ACTIVITIES;
  }

  getPublishedActivities() {
    return ACTIVITIES.filter((a) => a.state === 'published');
  }

  getActivityBySlug(slug: string) {
    return ACTIVITIES.find((a) => a.slug === slug);
  }
}
