import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
    { path: 'home', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
    { path: 'feature', loadComponent: () => import('./components/feature/feature.component').then(c => c.FeatureComponent) },
    { path: 'piani', loadComponent: () => import('./components/piani/piani.component').then(c => c.PianiComponent) }

];
