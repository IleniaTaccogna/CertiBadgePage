import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
];
