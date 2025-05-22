import { inject, Injectable, signal } from '@angular/core';
import { MockServer } from '../mock-backend/mock-server.service';
import { Leader } from '../components/leaderboard-table/leaderboard-table.component';
import { map, Observable, of, tap } from 'rxjs';
import { User } from '../mock-backend/db/user-table';
import { BarChartRace } from '../components/bar-chart-race/bar-chart-race.component';
import { DistributionPiece } from '../components/wealth-dist-pie/wealth-dist-pie.component';
import { ApiCache } from './api-cache.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  private static CACHE_KEY = 'leaders';
  private cache = inject(ApiCache);
  private mockServer = inject(MockServer);

  fetchLeaders(): Observable<{
    top6: Leader[],
    leadersOverTime: BarChartRace[],
    wealthDist: DistributionPiece[]
  }> {
    const cachedLeaders = this.cache.get(LeaderboardService.CACHE_KEY);
    // debugger;
    if (cachedLeaders) {
      return of(cachedLeaders);
    }

    return this.mockServer.call({
      verb: 'GET',
      path: '/leaders'
    })
      .pipe(
        tap((response) => {
          this.cache.add({
            key: LeaderboardService.CACHE_KEY,
            expiration: new Date(new Date().getTime() + 1000 * 60 * 20), // 20 min cache
            data: response
          });
        })
      );  
  }
}
