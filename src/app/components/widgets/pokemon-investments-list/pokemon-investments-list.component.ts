import { Component, input } from '@angular/core';
import { PokemonIconComponent } from '../../pokemon-icon/pokemon-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { PokeDollarsComponent } from "../../poke-dollars/poke-dollars.component";

export interface PokemonInvestment {
  pokedexNumber: number;
  pokemonForm: string;
  pokemonName: string;
  companyType: string;
  slogan: string;
  amount: number;
  yourCutNumerator?: number;
  yourCutDenominator?: number;
  returnedAmount?: number;
}

@Component({
  selector: 'app-pokemon-investments-list',
  imports: [
    PokemonIconComponent,
    MatIconModule,
    MatListModule,
    NgClass,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    PokeDollarsComponent
],
  templateUrl: './pokemon-investments-list.component.html',
  styleUrl: './pokemon-investments-list.component.scss'
})
export class PokemonInvestmentsListComponent {
  investments = input<PokemonInvestment[]>([]);
}
