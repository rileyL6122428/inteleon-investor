import { Component, linkedSignal, OnInit, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokemonInvestment, PokemonInvestmentsListComponent } from '../../widgets/pokemon-investments-list/pokemon-investments-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-pokemon',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    PokemonInvestmentsListComponent,
    FormsModule
  ],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.scss'
})
export class SearchPokemonComponent {

  searchTerm = signal('');

  searchableMons = signal<PokemonInvestment[]>([
    {
      pokedexNumber: 115,
      pokemonName: 'Kangaskhan',
      pokemonForm: 'default',
      companyType: 'corp',
      slogan: 'Mega profits in mega formats',
      yourCutNumerator: 22,
      yourCutDenominator: 25
    },
    {
      pokedexNumber: 150,
      pokemonName: 'Mewtwo',
      pokemonForm: 'default',
      companyType: 'startup',
      slogan: 'Please tariff shadow rider',
      yourCutNumerator: 19,
      yourCutDenominator: 20
    },
    {
      pokedexNumber: 151,
      pokemonName: 'Mew',
      pokemonForm: 'default',
      companyType: 'startup',
      slogan: 'Mythical returns',
      yourCutNumerator: 19,
      yourCutDenominator: 20
    },
  ]);

  filteredList = linkedSignal<PokemonInvestment[]>(() => {
    if (!this.searchTerm()) {
      return [];
    }

    return this.searchableMons().filter((mon) => 
      mon.pokemonName
      .toLocaleLowerCase()
      .includes(this.searchTerm().toLocaleLowerCase())
    );
  });

  onChange(event: any) {
    console.log(event);
  }
}
