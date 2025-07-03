import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)},

    { path: '', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
    { path: 'home', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
    { path: 'feature', loadComponent: () => import('./components/feature/feature.component').then(c => c.FeatureComponent) },
    { path: 'workflow', loadComponent: () => import('./components/workflow/workflow.component').then(c => c.WorkflowComponent) },
    { path: 'piani', loadComponent: () => import('./components/piani/piani.component').then(c => c.PianiComponent) }
];
