import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FeatureOption } from '../../models/feature-option.type';
import { BadgeDetail } from '../../models/badge-detail.type';
import { BadgeFeatureService } from '../../services/badge-feature.service';

@Component({
  selector: 'ca-feature',
  imports: [CardModule, ButtonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent implements OnInit {
public featureOptions: FeatureOption[] = [];
public badgeDetails: BadgeDetail[] = [];
private _badgeFeatureService = inject(BadgeFeatureService);


  ngOnInit(): void {
    this._badgeFeatureService.getFeatureOptions().subscribe(data => {
      this.featureOptions = data
    })

    this._badgeFeatureService.getBadgeDetails().subscribe(data => {
      this.badgeDetails = data
    })
  }

}
