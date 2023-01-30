import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroProfileRoutingModule } from './hero-profile-routing.module';
import { HeroProfileComponent } from './hero-profile.component';
import {SharedModule  } from "../shared/shared.module";
@NgModule({
  declarations: [
    HeroProfileComponent,
  ],
  imports: [
    CommonModule,
    HeroProfileRoutingModule,
    SharedModule
  ],
})
export class HeroProfileModule { }
