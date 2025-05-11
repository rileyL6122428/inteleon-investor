import { BaseController } from "./base-controller";

export class PortfolioController extends BaseController {

  getCurrentUsersPortfolio() {
    const currentUser = this.database.userTable.getById('1');

    return {
      freeCash: currentUser.freeCash,
      netWorth: currentUser.netWorth,
    };
  }
}