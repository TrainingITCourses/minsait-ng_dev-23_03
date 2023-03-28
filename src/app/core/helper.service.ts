import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}
  getParamValue(activatedRoute: ActivatedRoute, paramName: string): string {
    return activatedRoute.snapshot.paramMap.get(paramName) || '';
  }
}
