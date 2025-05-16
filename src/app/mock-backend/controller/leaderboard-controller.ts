import { BaseController } from "./base-controller";

export class LeaderboardController extends BaseController {

  getLeaders(params = { cutoff: 6 }) {
    const top6 = this.database.userTable.getAll()
      .sort((userA, userB) =>  userB.netWorth - userA.netWorth)
      .slice(0, params.cutoff);

    return { top6 };
  }
}