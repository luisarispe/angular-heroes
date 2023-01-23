// 1 - Importaciones
import { Action } from '@ngrx/store'
import { Heroe } from '../classes/heroe'

// 2 - Definición del tipo de acción
export const ADD_HERO = 'Add hero'

// 3 - Creación de la clase tipo AddHero
export class AddHero implements Action {
  readonly type = ADD_HERO
  constructor(public payload: Heroe) { }
}

// 4 - Exportación de la acción
export type Actions = AddHero