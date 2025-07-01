import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
    { path: 'home', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
];
