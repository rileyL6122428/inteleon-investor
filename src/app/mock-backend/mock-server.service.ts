import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { PokemonController } from './controller/pokemon-controller';
import { MOCK_DATABASE } from './db/mock-database';
import { PortfolioController } from './controller/portfolio-controller';
import { UserController } from './controller/user-controller';
import { LeaderboardController } from './controller/leaderboard-controller';

@Injectable({
  providedIn: 'root'
})
export class MockServer {

  call(params: {verb: string, path: string, body?: Record<string, any>}): Observable<any> {
    const { verb, path, body } = params;
    let serverResponse$: Observable<any>;

    if (verb === 'GET' && path === '/pokemon/all') {
      serverResponse$ = of(new PokemonController(MOCK_DATABASE).getAll());
    } else if (verb === 'GET' && path.match(/pokemon\/(\d+)\/([a-z]+)/)) {
      const pathMatches = path.match(/pokemon\/(\d+)\/([a-z]+)/);
      const pokedexNumber = Number(pathMatches![1]);
      const form = pathMatches![2]
      ;
      serverResponse$ = of(
        new PokemonController(MOCK_DATABASE).getOne({ pokedexNumber, form })
      );
    } else if (verb === 'GET' && path === '/current-user/portfolio') {
      serverResponse$ = of(
        new PortfolioController(MOCK_DATABASE)
          .getCurrentUsersPortfolio()
      );
    } else if (verb === 'GET' && path === '/leaders') {
      serverResponse$ = of(
        new LeaderboardController(MOCK_DATABASE)
          .getLeaders()
      );
    } else {
      serverResponse$ = throwError(() => new Error('Server operation not found'));
    }

    return serverResponse$.pipe(
      delay(500 + 1500 * Math.random())
    );
  }
}
