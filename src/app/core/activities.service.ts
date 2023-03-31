import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Activity } from '../data/activity.type';
import { ACTIVITIES } from '../data/app.data';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  apiEndpoint = 'http://localhost:3000' + '/activities';

  constructor(private httpClient: HttpClient) {}

  // getAllActivities(): Activity[] {
  //   return ACTIVITIES;
  // }

  getAllActivities$(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>('http://localhost:3000/activities');
  }

  // getPublishedActivities(): Activity[] {
  //   return ACTIVITIES.filter((a) => a.state === 'published');
  // }

  getPublishedActivities$(): Observable<Activity[]> {
    // return this.httpClient.get<Activity[]>(
    //   'http://localhost:3000/activities?state=published'
    // );
    return this.httpClient
      .get<Activity[]>('http://localhost:3000/activities')
      .pipe(
        tap((data) => console.log('Received data', data.length)),
        map((activities) => activities.filter((a) => a.state === 'published')),
        tap((data) => console.log('Processed data', data.length))
      );
  }

  getActivityBySlug(slug: string): Activity | undefined {
    return ACTIVITIES.find((a) => a.slug === slug);
  }
}
