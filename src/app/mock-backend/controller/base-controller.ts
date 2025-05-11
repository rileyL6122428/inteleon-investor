import { MockDatabase } from "../db/mock-database";

export class BaseController {
  constructor(
    protected database: MockDatabase
  ) {}
}