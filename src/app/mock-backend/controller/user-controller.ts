import { BaseController } from "./base-controller";

export class UserController extends BaseController {

  getCurrentUser() {
    return this.database.userTable.getById('1');
  }
}