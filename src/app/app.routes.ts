import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutThisSiteComponent } from './components/pages/about-this-site/about-this-site.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ResultsComponent } from './components/pages/results/results.component';
import { PokemonComponent } from './components/pages/pokemon/pokemon.component';
import { SearchPokemonComponent } from './components/pages/search-pokemon/search-pokemon.component';

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
        path: 'pokemon',
        component: SearchPokemonComponent
    },
    {
        path: 'pokemon/:pokemonNumber/:form',
        component: PokemonComponent
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
