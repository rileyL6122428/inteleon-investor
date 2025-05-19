import { Injectable, signal } from '@angular/core';
import { MockServer } from '../mock-backend/mock-server.service';
import { Leader } from '../components/leaderboard-table/leaderboard-table.component';
import { map, Observable } from 'rxjs';
import { User } from '../mock-backend/db/user-table';
import { BarChartRace } from '../components/bar-chart-race/bar-chart-race.component';
import { DistributionPiece } from '../components/wealth-dist-pie/wealth-dist-pie.component';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(
    private mockServer: MockServer
  ) { }

  fetchLeaders(): Observable<{
    top6: Leader[],
    leadersOverTime: BarChartRace[],
    wealthDist: DistributionPiece[]
  }> {
    return this.mockServer.call({
      verb: 'GET',
      path: '/leaders'
    });
  }
}
