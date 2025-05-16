import { Injectable, signal } from '@angular/core';
import { MockServer } from '../mock-backend/mock-server.service';
import { Leader } from '../components/leaderboard-table/leaderboard-table.component';
import { map, Observable } from 'rxjs';
import { User } from '../mock-backend/db/user-table';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  

  constructor(
    private mockServer: MockServer
  ) { }

  fetchLeaders(): Observable<{top6: User[]}> {
    return this.mockServer.call({
      verb: 'GET',
      path: '/leaders'
    });
  }
}
