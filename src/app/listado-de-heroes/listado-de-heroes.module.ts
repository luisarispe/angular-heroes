import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';
import { ListadoDeHeroesRoutingModule } from './listado-de-heroes-routing.module';
import {SharedModule  } from "../shared/shared.module";



@NgModule({
  declarations: [
    ListadoDeHeroesComponent
  ],
  imports: [
    CommonModule,
    ListadoDeHeroesRoutingModule,
    SharedModule
  ]
})
export class ListadoDeHeroesModule { }
