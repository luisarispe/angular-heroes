import { Heroe } from './classes/heroe';

export interface AppState {
  readonly heroes: Heroe[];
}