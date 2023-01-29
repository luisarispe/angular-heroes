import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HeroesStateModel } from './heroes.model';
import { AddHeroe, RemoveHeroes} from './heroes.actions';
import { Injectable } from '@angular/core';

@State({
  name: 'heroes',
  defaults: {
    heroes: []
  }
})
@Injectable()
export class HeroesState {

  @Selector()
  static getPosts(state: HeroesStateModel) { return state.heroes; }

  // Añade un nuevo post al estado
  @Action(AddHeroe)
  add({ getState, patchState }: StateContext<HeroesStateModel>, { payload }: AddHeroe) {
    const state = getState();
    patchState({
      heroes: [...state.heroes, payload]
    });
  }

    // Elimina un post del estado
    @Action(RemoveHeroes)
    remove({ getState, patchState }: StateContext<HeroesStateModel>, {  }: RemoveHeroes) {
      const state = getState();
    patchState({
      heroes: []
    });
    }
  }