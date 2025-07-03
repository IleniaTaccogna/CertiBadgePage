import { Component, inject, OnInit } from '@angular/core';
import { TestimonialService } from '../../services/testimonial.service';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-piani',
  imports: [],
  templateUrl: './piani.component.html',
  styleUrl: './piani.component.scss'
})
export class PianiComponent implements OnInit {

  public testimonials: Testimonial[] = [];
  private _testimonialService = inject(TestimonialService);

  ngOnInit(): void {
    this._testimonialService.getTestimonials().subscribe(data => {
      this.testimonials = data
    })
  }



}
