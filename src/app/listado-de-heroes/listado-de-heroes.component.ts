import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';

import { Store} from '@ngxs/store';
import { Heroe } from '../classes/heroe';


@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {
  public heroes: Observable<Heroe>;

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString;
  // The child component : spinner
  @ViewChild('spi') spinner;
  /* public heroes: Array<Heroe> = []; */

  constructor(public heroesService: HeroesService, private router:Router,private store: Store
    ) {
      this.heroes = this.store.select(state => state.heroes.heroes);
     }


  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }

  ngOnInit(): void {
    this.heroesService.getHeroes();

  }


}
