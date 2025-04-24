import { Component, signal } from '@angular/core';
import { PokeDollarsComponent } from '../../poke-dollars/poke-dollars.component';
import { PokemonIconComponent } from '../../pokemon-icon/pokemon-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgClass } from '@angular/common';
import { LineGraphComponent } from '../../line-graph/line-graph.component';

interface PokemonInvestment {
  pokedexNumber: number;
  pokemonForm: string;
  pokemonName: string;
  companyType: string;
  slogan: string;
  investedPercentage: number;
  operatingSplitNumerator: number;
  operatingSplitDenominator: number;
}

@Component({
  selector: 'app-portfolio',
  imports: [
    PokeDollarsComponent,
    PokemonIconComponent,
    MatIconModule,
    MatListModule,
    NgClass,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  investments = signal<PokemonInvestment[]>([
    {
      pokedexNumber: 115,
      pokemonName: 'Kangaskhan',
      pokemonForm: 'default',
      companyType: 'corp',
      slogan: 'Mega profits in mega formats',
      investedPercentage: 60,
      operatingSplitNumerator: 3,
      operatingSplitDenominator: 25
    },
    {
      pokedexNumber: 150,
      pokemonName: 'Mewtwo',
      pokemonForm: 'default',
      companyType: 'startup',
      slogan: 'Please tariff shadow rider',
      investedPercentage: 20,
      operatingSplitNumerator: 1,
      operatingSplitDenominator: 20
    },
  ]);
}
