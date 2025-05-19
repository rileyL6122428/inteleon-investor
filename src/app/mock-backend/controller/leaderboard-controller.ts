import { User } from "../db/user-table";
import { BaseController } from "./base-controller";

export class LeaderboardController extends BaseController {

  getLeaders(params = { cutoff: 6 }) {
    const top6 = this.database.userTable.getAll()
      .sort((userA, userB) =>  userB.netWorth - userA.netWorth)
      .slice(0, params.cutoff)
      .map((user, index) => {
        return {
          position: index + 1,
          name: user.username,
          cash: user.netWorth,
          createdAt: user.createdAt,
        }
      });

    const leadersOverTime = this.database.leadersOverTimeTable.getAll();
    const leaderUserIds = new Set(leadersOverTime.map(leader => leader.userid));
    const userIdsToUsers = this.database.userTable
      .findMany((user) => leaderUserIds.has(user.id))
      .reduce((prev, current) => {
        prev[current.id] = current
        return prev;
      }, {} as Record<string, User>);

    const leadersOverTimeFormatted = leadersOverTime.map(({date, netWorth, userid}) => {
      return {
        date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
        name: userIdsToUsers[userid].username,
        value: netWorth
      };
    });

    const wealthDist = [
      {value: 35, name: 'Top 5%'},
      {value: 20, name: '(5%, 10%]'},
      {value: 15, name: '(10%, 20%]'},
      {value: 16, name: '(20%, 50%]'},
      {value: 14, name: '(50%, 100%]'},
    ];

    return {
      top6,
      leadersOverTime: leadersOverTimeFormatted,
      wealthDist
    };
  }
}