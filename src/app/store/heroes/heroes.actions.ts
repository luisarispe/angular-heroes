import {Heroe} from '../../classes/heroe';


export class AddHeroe {
  static readonly type = '[HEROES] Add';
  constructor( public payload: Heroe ) {}
}

export class RemoveHeroes {
  static readonly type = '[HEROE] Remove';
  constructor() {}
}