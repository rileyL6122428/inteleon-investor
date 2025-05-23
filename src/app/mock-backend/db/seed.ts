import { LeaderSnapshot } from "./leaders-over-time-table";
import { Pokemon } from "./pokemon-table";
import { TournamentInvestment } from "./tournament-investment-table";
import { Tournament } from "./tournament-table";
import { User } from "./user-table";

export const USER_SEED: User[] = [
  {
    id: '1',
    username: 'Red-0001',
    password: 'password',
    freeCash: 1000,
    netWorth: 5000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '2',
    username: 'blue-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 900_000_000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '3',
    username: 'Lorelei-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 850_000_000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '4',
    username: 'Lance-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 800_000_000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '5',
    username: 'Agatha-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 750_000_000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '6',
    username: 'Bruno-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 700_000_000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '7',
    username: 'Oak-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 100_000_000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '8',
    username: 'Brock-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 100_000_000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '9',
    username: 'Misty-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 100_000_000,
    createdAt: new Date(2000, 0, 1)
  },
  {
    id: '10',
    username: 'Surge-0001',
    password: 'password',
    freeCash: 0,
    netWorth: 100_000_000,
    createdAt: new Date(2000, 0, 1)
  },
];

export const LEADERS_OVER_TIME_SEED: LeaderSnapshot[] = [
  {
    id: '1',
    userid: '1',
    netWorth: 100,
    date: new Date(2023, 0, 1)
  },
  {
    id: '2',
    userid: '2',
    netWorth: 750,
    date: new Date(2023, 0, 1)
  },
  {
    id: '3',
    userid: '7',
    netWorth: 200,
    date: new Date(2023, 0, 1)
  },
  {
    id: '4',
    userid: '9',
    netWorth: 205,
    date: new Date(2023, 0, 1)
  },
  {
    id: '5',
    userid: '10',
    netWorth: 200,
    date: new Date(2023, 0, 1)
  },
  {
    id: '6',
    userid: '4',
    netWorth: 205,
    date: new Date(2023, 0, 1)
  },
  {
    id: '7',
    userid: '1',
    netWorth: 230,
    date: new Date(2023, 1, 1)
  },
  {
    id: '8',
    userid: '5',
    netWorth: 730,
    date: new Date(2023, 1, 1)
  },
  {
    id: '9',
    userid: '7',
    netWorth: 400,
    date: new Date(2023, 1, 1)
  },
  {
    id: '10',
    userid: '9',
    netWorth: 205,
    date: new Date(2023, 1, 1)
  },
  {
    id: '11',
    userid: '10',
    netWorth: 200,
    date: new Date(2023, 1, 1)
  },
  {
    id: '12',
    userid: '4',
    netWorth: 500,
    date: new Date(2023, 1, 1)
  },
  {
    id: '13',
    userid: '4',
    netWorth: 305,
    date: new Date(2023, 2, 1)
  },
  {
    id: '14',
    userid: '1',
    netWorth: 800,
    date: new Date(2023, 2, 1)
  },
  {
    id: '15',
    userid: '5',
    netWorth: 720,
    date: new Date(2023, 2, 1)
  },
  {
    id: '16',
    userid: '7',
    netWorth: 405,
    date: new Date(2023, 2, 1)
  },
  {
    id: '17',
    userid: '9',
    netWorth: 250,
    date: new Date(2023, 2, 1)
  },
  {
    id: '18',
    userid: '10',
    netWorth: 300,
    date: new Date(2023, 2, 1)
  },
];

export const POKEMON_SEED: Pokemon[] = [
  {
    id: '1-default',
    pokedexNumber: 1,
    pokemonName: 'Bulbasaur',
    pokemonForm: 'default',
    slogan: 'Best starter',
    yourCutNumerator: 22,
    yourCutDenominator: 25,
    iconPath: '/pokemon/0001/default/icon.png'
  },
  {
    id: '2-default',
    pokedexNumber: 2,
    pokemonName: 'Ivysaur',
    pokemonForm: 'default',
    slogan: 'Best starter adolescent',
    yourCutNumerator: 22,
    yourCutDenominator: 25,
    iconPath: ''
  },
  {
    id: '115-default',
    pokedexNumber: 115,
    pokemonName: 'Kangaskhan',
    pokemonForm: 'default',
    slogan: 'Mega profits in mega formats',
    yourCutNumerator: 22,
    yourCutDenominator: 25,
    iconPath: '/pokemon/0115/default/icon.png'
  },
  {
    id: '150-default',
    pokedexNumber: 150,
    pokemonName: 'Mewtwo',
    pokemonForm: 'default',
    slogan: 'Please tariff shadow rider',
    yourCutNumerator: 19,
    yourCutDenominator: 20,
    iconPath: '/pokemon/0150/default/icon.png'
  },
  {
    id: '151-default',
    pokedexNumber: 151,
    pokemonName: 'Mew',
    pokemonForm: 'default',
    slogan: 'Mythical returns',
    yourCutNumerator: 19,
    yourCutDenominator: 20,
    iconPath: '/pokemon/0151/default/icon.png'
  },

];

export const TOURNAMENT_SEED: Tournament[] = [
  {
    id: "1",
    date: new Date(2025, 2, 10),
    completed: true,
    province: "Texas",
    isNext: false,
  },
  {
    id: "2",
    date: new Date(2025, 3, 10),
    completed: true,
    province: "Kentucky",
    isNext: false,
  },
  {
    id: "3",
    date: new Date(2025, 4, 10),
    completed: false,
    province: "Florida",
    isNext: true,
  },
];

export const TOURNAMENT_INVESTMENT_SEED: TournamentInvestment[] = [
  {
    id: "1",
    tournamentId: "1",
    pokemonId: '115-default',
    userId: "1",
    invested: 1000,
    returned: 500
  },
  {
    id: "2",
    tournamentId: "1",
    pokemonId: '150-default',
    userId: "1",
    invested: 1000,
    returned: 500
  },
  {
    id: "3",
    tournamentId: "2",
    pokemonId: '115-default',
    userId: "1",
    invested: 500,
    returned: 2500
  },
  {
    id: "4",
    tournamentId: "2",
    pokemonId: '150-default',
    userId: "1",
    invested: 500,
    returned: 2500
  },
  {
    id: "5",
    tournamentId: "3",
    pokemonId: '115-default',
    userId: "1",
    invested: 2500,
    returned: null
  },
  {
    id: "6",
    tournamentId: "3",
    pokemonId: '150-default',
    userId: "1",
    invested: 2500,
    returned: null
  },
];