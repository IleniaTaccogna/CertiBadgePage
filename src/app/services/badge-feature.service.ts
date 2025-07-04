import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureOption } from '../models/feature-option.type';
import { BadgeDetail } from '../models/badge-detail.type';

@Injectable({
  providedIn: 'root'
})
export class BadgeFeatureService {
  private _http = inject(HttpClient);
  private _apiUrl = 'http://localhost:3000';


  public getFeatureOptions(): Observable<FeatureOption[]> {
    return this._http.get<FeatureOption[]>(`${this._apiUrl}/feature-options`);
  }

  public getBadgeDetails(): Observable<BadgeDetail[]> {
    return this._http.get<BadgeDetail[]>(`${this._apiUrl}/badge-detail`);
  }
}