import { Component, inject, linkedSignal, model, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PokemonInvestment, PokemonInvestmentsListComponent } from '../../widgets/pokemon-investments-list/pokemon-investments-list.component';
import { PokemonService } from '../../../services/pokemon.service';

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
export class SearchPokemonComponent implements OnInit {

  private pokemonService: PokemonService = inject(PokemonService);

  readonly searchTerm = model('');

  readonly searchableMons = signal<PokemonInvestment[]>([]);

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

  ngOnInit(): void {
    this.pokemonService.getAllPokemon()
      .subscribe((allPokemon) => this.searchableMons.set(allPokemon));
  }
}
