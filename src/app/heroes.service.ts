import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from './classes/heroe';
import { AddHeroe, RemoveHeroes } from './store/heroes/heroes.actions';
import { Store } from '@ngxs/store';


@Injectable()
export class HeroesService {
  public heroes: Array<Heroe> = [];
  private base_url='http://localhost:3000/api/hero';
  public page = 0;
  public step = 20;
  public total = 0;

  public group_colors = {"azul" : "#1f8ff7",
                        "violeta":"#a43de3",
                        "naranjo":"#df5c0f",
                        "verde":"#0ea521"}
  
  constructor(private http: HttpClient, private store: Store) { }

  resetPager() {
    this.page = 0;
  }

  getHeroes (nameStartsWith?: string, page?: number) {
    console.log("TEAMS");
    if (page || page === 0) {
      this.page = page;
    }

    const url=this.base_url+'?offset='+(this.page * this.step)+ (nameStartsWith ? ('&nameStartsWith=' + nameStartsWith) : '');

    this.http.get<any>(url).subscribe((data) => {
      
      this.total = Math.ceil(data.total / this.step);
      this.store.dispatch(new RemoveHeroes());
      data.heroes.forEach( result => {
          this.store.dispatch(new AddHeroe({
            id:result.id,
            name:result.name,
            description:result.description,
            modified:result.modified,
            thumbnail:result.thumbnail,
            resourceURI:result.resourceURI,
            teamColor:result.teamColor
          }));
        }
      );
    });
  }

  getHeroe(id) {
    const url = this.base_url+'/getOne?id=' + id;
    return this.http.get<any>(url);
  }
  save(id, color){
    const color_code=this.group_colors[color];
    
    let body = new URLSearchParams();
    body.set('id_hero', id);
    body.set('color', color);
    body.set('color_code', color_code);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    return this.http.post(this.base_url,body.toString(), options);
    
  }
}
