import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroe/:id',
    loadChildren: () => import('./hero-profile/hero-profile.module').then(m => m.HeroProfileModule)
  },
  {
    path: 'listado-heroes',
    loadChildren: () => import('./listado-de-heroes/listado-de-heroes.module').then(m => m.ListadoDeHeroesModule)
  },
  { path: '**', redirectTo: '/listado-heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }