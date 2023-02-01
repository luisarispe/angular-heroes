import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { NgxsModule, Store } from "@ngxs/store";
import { of } from "rxjs";
import {HeroesState} from "../../app/store/heroes/heroes.state"
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HeroesService} from '../../app/heroes.service';
import { AddHeroe, RemoveHeroes } from '../../app/store/heroes/heroes.actions';
import { HeroesStateModel} from '../../app/store/heroes/heroes.model';
import { Heroe } from "src/app/classes/heroe";

const mockHeroe2=
    {
        "id": "1011334",
        "name": "3-D Man",
        "description": "",
        "modified": new Date(),
        "thumbnail": {
            "path": "local",
            "extension": "jpg"
        },
        "resourceURI": "local",
        "teamColor": {
            "_id": "63d41ce2478aa507ac03d9ab",
            "id_hero": "1011334",
            "color": "naranjo",
            "color_code": "#df5c0f",
            "__v": 0
        }
}
const mockHeroe=
    {
        "id":"1", 
        "name": 'Superman', 
        "description": '', 
         "modified": "", 
        "thumbnail" : "", 
        "resourceURI": "",
        "teamColor": {
          "color":'azul'
        }
    };

const mockHeroes=
    [
        {
            "id": "1011334",
            "name": "3-D Man",
            "description": "",
            "modified": new Date(),
            "thumbnail": {
                "path": "local",
                "extension": "jpg"
            },
            "resourceURI": "local",
            "teamColor": {
                "_id": "63d41ce2478aa507ac03d9ab",
                "id_hero": "1011334",
                "color": "naranjo",
                "color_code": "#df5c0f",
                "__v": 0
            }
    }
]


describe('Set de pruebas del servicio heroes', ()=>{
    let httpClient: HttpClient;
    let service: HeroesService;
    let store:Store;
    let state: HeroesState;
    beforeEach(() => {
        TestBed.configureTestingModule({  
          imports:[
            HttpClientTestingModule,
            NgxsModule.forRoot([
                HeroesState
              ]),
          ],
          providers:[HeroesService]
        });
        service= TestBed.inject(HeroesService);
        httpClient= TestBed.inject(HttpClient);
        store= TestBed.inject(Store);
        state= TestBed.inject(HeroesState);
      });

    it("prueba de traer un heroe por el id", ()=>{
        jest.spyOn(httpClient, 'get').mockReturnValue(of(mockHeroe));
        service.getHeroe(1).subscribe({
            next:(resp)=>{
                expect(resp).toEqual(mockHeroe);
            }
        });
    });

    it("prueba de reiniciar pagina", ()=>{
        service.resetPager()
        expect(service.page).toBe(0);
    });

    it('prueba de guardar un grupo de un heroe', ()=>{
        jest.spyOn(httpClient, 'post').mockReturnValue(of(mockHeroe));
        service.save(1, 'azul').subscribe({
            next:(resp)=>{
                expect(resp).toEqual(mockHeroe);
            }
        })
    })

    it('prueba de traer el listado de heroes', ()=>{
        jest.spyOn(httpClient, 'get').mockReturnValue(of({heroes:[mockHeroe2]}));
        service.getHeroes();
        
        store.select(state => state['heroes']).subscribe({
            next(value) {
                expect(value).toEqual([]);
            },
        });
        
    });

    it('prueba de trae heroes con un filtro', ()=>{
        jest.spyOn(httpClient, 'get').mockReturnValue(of({heroes:[mockHeroe2]}));
        service.getHeroes('batman',1);
        store.select(state => state['heroes']).subscribe({
            next(value) {
                expect(value).toEqual([]);
            },
        });
        
    });
})