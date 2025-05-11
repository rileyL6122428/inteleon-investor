import { inject, Injectable } from '@angular/core';
import { MockServer } from '../mock-backend/mock-server.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private mockServer = inject(MockServer);

  getPortfolio() {
    return this.mockServer.call({
      verb: 'GET',
      path: '/current-user/portfolio',
    });
  }
}
