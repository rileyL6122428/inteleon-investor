import { LeaderSnapshot } from "./leaders-over-time-table";
import { Pokemon } from "./pokemon-table";
import { User } from "./user-table";

export const USER_SEED: User[] = [
  {
    id: '1',
    username: 'red-0001',
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

