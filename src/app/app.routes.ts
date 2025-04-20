import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutThisSiteComponent } from './components/pages/about-this-site/about-this-site.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ResultsComponent } from './components/pages/results/results.component';

export const routes: Routes = [
    {
        path: 'results',
        component: ResultsComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'about',
        component: AboutThisSiteComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '*',
        redirectTo: ''
    }
];
