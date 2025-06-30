import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'feature', loadComponent: () => import('./components/feature/feature.component').then(c => c.FeatureComponent)}
];
