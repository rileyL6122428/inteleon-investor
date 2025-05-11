import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { PokemonController } from './controller/pokemon-controller';
import { MOCK_DATABASE } from './db/mock-database';

@Injectable({
  providedIn: 'root'
})
export class MockServer {

  call(params: {verb: string, path: string, body?: Record<string, any>}): Observable<any> {
    const { verb, path, body } = params;
    let serverResponse$: Observable<any>;

    if (verb === 'GET' && path === '/pokemon/all') {
      serverResponse$ = of(new PokemonController(MOCK_DATABASE).getAll());
    } else {
      serverResponse$ = throwError(() => new Error('Server operation not found'));
    }

    return serverResponse$.pipe(
      delay(500 + 1500 * Math.random())
    );
  }
}
