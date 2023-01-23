import { Heroe } from "../classes/heroe";
import * as HeroActions from './heroes.actions'

// 2 - Estado inicial
const initialState: Heroe[] = []


// 3 - Switch con las funciones puras
export function heroReducer(state: Heroe[]=[], action: HeroActions.Actions) {
  switch (action.type) {
    case HeroActions.ADD_HERO:
      return [...state, action.payload];
    default:
      return state;
  }
}