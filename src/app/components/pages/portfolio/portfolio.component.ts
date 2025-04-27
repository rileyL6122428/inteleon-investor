import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PokeDollarsComponent } from '../../poke-dollars/poke-dollars.component';
import { PokemonInvestment, PokemonInvestmentsListComponent } from "../../widgets/pokemon-investments-list/pokemon-investments-list.component";
import { DatePipe } from '@angular/common';
import { PercentageChangeComponent } from '../../widgets/percentage-change/percentage-change.component';
import { RouterLink } from '@angular/router';

export interface TournamentInvestment {
  date: Date;
  isUpcoming: boolean;
  province: string;
  totalInvested: number;
  totalReturned: number;
  mons: PokemonInvestment[];
}

@Component({
  selector: 'app-portfolio',
  imports: [
    PokeDollarsComponent,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    PokemonInvestmentsListComponent,
    DatePipe,
    PercentageChangeComponent,
    RouterLink
],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  currentNetWorth = signal(5000);
  initialNetWorth = signal(2000);

  tournamentInvestments = signal<TournamentInvestment[]>([
    {
      date: new Date(2025, 4, 10),
      isUpcoming: true,
      province: 'Florida',
      totalInvested: 4000,
      totalReturned: 0,
      mons: [
        {
          pokedexNumber: 115,
          pokemonName: 'Kangaskhan',
          pokemonForm: 'default',
          slogan: 'Mega profits in mega formats',
          amount: 3000,
          yourCutNumerator: 22,
          yourCutDenominator: 25,
        },
        {
          pokedexNumber: 150,
          pokemonName: 'Mewtwo',
          pokemonForm: 'default',
          slogan: 'Please tariff shadow rider',
          amount: 1000,
          yourCutNumerator: 19,
          yourCutDenominator: 20
        },
      ]
    },
    {
      date: new Date(2025, 3, 10),
      isUpcoming: false,
      province: 'Kentucky',
      totalInvested: 1000,
      totalReturned: 5000,
      mons: [
        {
          pokedexNumber: 115,
          pokemonName: 'Kangaskhan',
          pokemonForm: 'default',
          slogan: 'Mega profits in mega formats',
          amount: 500,
          returnedAmount: 2500
        },
        {
          pokedexNumber: 150,
          pokemonName: 'Mewtwo',
          pokemonForm: 'default',
          slogan: 'Please tariff shadow rider',
          amount: 500,
          returnedAmount: 2500
        },
      ]
    },
    {
      date: new Date(2025, 2, 10),
      isUpcoming: false,
      province: 'Texas',
      totalInvested: 2000,
      totalReturned: 1000,
      mons: [
        {
          pokedexNumber: 115,
          pokemonName: 'Kangaskhan',
          pokemonForm: 'default',
          slogan: 'Mega profits in mega formats',
          amount: 1000,
          returnedAmount: 500
        },
        {
          pokedexNumber: 150,
          pokemonName: 'Mewtwo',
          pokemonForm: 'default',
          slogan: 'Please tariff shadow rider',
          amount: 1000,
          returnedAmount: 500
        },
      ]
    },
  ]);
}
