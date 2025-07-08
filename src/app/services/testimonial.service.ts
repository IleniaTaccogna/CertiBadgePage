import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimonial } from '../models/testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private _http = inject(HttpClient);
  private _apiUrl = "http://localhost:3000/testimonials"

  getTestimonials(): Observable<Testimonial[]>{
    return this._http.get<Testimonial[]>(this._apiUrl);
  }
}
