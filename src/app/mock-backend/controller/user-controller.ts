import { BaseController } from "./base-controller";

export class UserController extends BaseController {

  getCurrentUser() {
    return this.database.userTable.getById('1');
  }

  getTop(params = { cutoff: 6 }) {
    return this.database.userTable.getAll()
      .sort((userA, userB) => userA.netWorth - userB.netWorth)
      .slice(0, params.cutoff);
  }
}