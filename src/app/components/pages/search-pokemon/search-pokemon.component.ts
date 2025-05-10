import { Component, linkedSignal, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PokemonInvestment, PokemonInvestmentsListComponent } from '../../widgets/pokemon-investments-list/pokemon-investments-list.component';

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

  readonly searchTerm = model('');

  readonly searchableMons = signal<PokemonInvestment[]>([
    {
      pokedexNumber: 1,
      pokemonName: 'Bulbasaur',
      pokemonForm: 'default',
      slogan: 'Best starter',
      yourCutNumerator: 22,
      yourCutDenominator: 25,
      iconPath: '/pokemon/0001/default/icon.png'
    },
    {
      pokedexNumber: 2,
      pokemonName: 'Ivysaur',
      pokemonForm: 'default',
      slogan: 'Best starter adolescent',
      yourCutNumerator: 22,
      yourCutDenominator: 25,
      iconPath: ''
    },
    {
      pokedexNumber: 115,
      pokemonName: 'Kangaskhan',
      pokemonForm: 'default',
      slogan: 'Mega profits in mega formats',
      yourCutNumerator: 22,
      yourCutDenominator: 25,
      iconPath: '/pokemon/0115/default/icon.png'
    },
    {
      pokedexNumber: 150,
      pokemonName: 'Mewtwo',
      pokemonForm: 'default',
      slogan: 'Please tariff shadow rider',
      yourCutNumerator: 19,
      yourCutDenominator: 20,
      iconPath: '/pokemon/0150/default/icon.png'
    },
    {
      pokedexNumber: 151,
      pokemonName: 'Mew',
      pokemonForm: 'default',
      slogan: 'Mythical returns',
      yourCutNumerator: 19,
      yourCutDenominator: 20,
      iconPath: '/pokemon/0151/default/icon.png'
    },
  ]);

  readonly filteredList = linkedSignal<PokemonInvestment[]>(() => {
    if (!this.searchTerm()) {
      return [];
    }

    return this.searchableMons().filter((mon) => 
      mon.pokemonName
      .toLocaleLowerCase()
      .includes(this.searchTerm().toLocaleLowerCase())
    );
  });
}
