import { Component, inject, input } from '@angular/core';
import { PokemonIconComponent } from '../../pokemon-icon/pokemon-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { PokeDollarsComponent } from "../../poke-dollars/poke-dollars.component";
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InvestInPokemonComponent } from '../invest-in-pokemon/invest-in-pokemon.component';

export interface PokemonInvestment {
  pokedexNumber: number;
  pokemonForm: string;
  pokemonName: string;
  slogan: string;
  amount?: number;
  yourCutNumerator?: number;
  yourCutDenominator?: number;
  returnedAmount?: number;
  canEdit?: boolean;
  iconPath?: string | undefined;
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
    PokeDollarsComponent,
    RouterLink
],
  templateUrl: './pokemon-investments-list.component.html',
  styleUrl: './pokemon-investments-list.component.scss'
})
export class PokemonInvestmentsListComponent {
  investments = input<PokemonInvestment[]>([]);

  readonly dialog = inject(MatDialog);

  onEdit(pokemon: PokemonInvestment) {
    const dialogRef = this.dialog.open(InvestInPokemonComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed. Result =', result);
    });
  }

  onDivest(pokemon: PokemonInvestment) {
  }
}
