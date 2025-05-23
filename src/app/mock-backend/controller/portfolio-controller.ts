import { Pokemon } from "../db/pokemon-table";
import { TournamentInvestment } from "../db/tournament-investment-table";
import { BaseController } from "./base-controller";

export class PortfolioController extends BaseController {

  getCurrentUsersPortfolio() {
    const currentUser = this.database.userTable.getById('1');

    const pastAndNextTournaments = this.database.tournamentTable.findMany(
      (tournament) => tournament.completed || tournament.isNext
    );

    const pastAndNextIds = new Set(
      pastAndNextTournaments.map((tournament) => tournament.id)
    );

    const investments = this.database.tournamentInvestmentsTable.findMany(
      (investment) => pastAndNextIds.has(investment.tournamentId) &&
        investment.userId === currentUser.id
    );

    const investmentsByTournamentId = investments.reduce(
      (accum, next) => {
        if (!(next.tournamentId in accum)) {
          accum[next.tournamentId] = []
        }
        accum[next.tournamentId].push(next);
        return accum;
    }, {} as any);

    const investedPokemonIds = new Set(investments.map(
      (investment) => investment.pokemonId
    ));

    const investedPokemonById = this.database.pokemonTable.findMany(
      (pokemon) => investedPokemonIds.has(pokemon.id)
    ).reduce((accum, next) => {
      accum[next.id] = next;
      return accum
    }, {} as Record<string, Pokemon>);

    const formattedTournaments = pastAndNextTournaments.sort((a, b) => {
      if (a.isNext) {
        return -1;
      } else if (b.isNext) {
        return 1
      } else {
        return b.date.getTime() - a.date.getTime();
      }
    }).map((tournament) => {
      const investements = investmentsByTournamentId[tournament.id]
      return {
        date: tournament.date,
        isUpcoming: tournament.isNext,
        province: tournament.province,
        totalInvested: investements.reduce(
          (prev: number, investment: TournamentInvestment) =>
              investment.invested + prev,
          0
        ),
        totalReturned: investements.reduce(
          (prev: number, investment: TournamentInvestment) =>
            (investment.returned || 0) + prev,
          0
        ),
        mons: investements.map((investment: TournamentInvestment) => {
          const pokemon: Pokemon = investedPokemonById[investment.pokemonId];
          return {
            pokedexNumber: pokemon.pokedexNumber,
            pokemonName: pokemon.pokemonName,
            pokemonForm: pokemon.pokemonForm,
            slogan: pokemon.slogan,
            amount: investment.invested,
            returnedAmount: investment.returned,
            iconPath: pokemon.iconPath
          };
        })
      }
    });

    return {
      freeCash: currentUser.freeCash,
      netWorth: currentUser.netWorth,
      tournaments: formattedTournaments
    };
  }
}