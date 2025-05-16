import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutThisSiteComponent } from './components/pages/about-this-site/about-this-site.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ResultsComponent } from './components/pages/leaderboard/leaderboard.component';
import { PokemonComponent } from './components/pages/pokemon/pokemon.component';
import { SearchPokemonComponent } from './components/pages/search-pokemon/search-pokemon.component';
import { PokemonDashboardComponent } from './components/pages/pokemon-dashboard/pokemon-dashboard.component';
import { ThemeSelectionComponent } from './components/pages/theme-selection/theme-selection.component';

export const routes: Routes = [
    {
        path: 'leaderboard',
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
        path: 'pokemon-dashboard',
        component: PokemonDashboardComponent
    },
    {
        path: 'about',
        component: AboutThisSiteComponent
    },
    {
        path: 'theme',
        component: ThemeSelectionComponent
    },
    {
        path: '*',
        redirectTo: ''
    }
];
