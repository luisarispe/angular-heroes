import { ListadoDeHeroesComponent } from "../../app/listado-de-heroes/listado-de-heroes.component";
import { HeroesService } from '../../app/heroes.service';
import { ComponentFixture, TestBed, } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform,NgZone } from '@angular/core';
import { Observable, of } from "rxjs";
import { NgxsModule } from "@ngxs/store";
import {HeroesState} from "../../app/store/heroes/heroes.state"

describe("set de pruebas de listado de heroes",()=>{
    let component: ListadoDeHeroesComponent;
    let fixture: ComponentFixture<ListadoDeHeroesComponent>;
    let service: HeroesService;
    let ngZone: NgZone;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [
            ListadoDeHeroesComponent,
          ],
          imports:[
            RouterTestingModule,
            NgxsModule.forRoot([
                HeroesState
              ]),
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
          providers:[
            { provide: HeroesService, useClass: HeroesServiceMock }
          ]
        }).compileComponents();
        
      });

      beforeEach(() => {
        fixture = TestBed.createComponent(ListadoDeHeroesComponent);
        component = fixture.componentInstance;
        service = TestBed.inject( HeroesService );
        ngZone = TestBed.inject(NgZone);
        fixture.detectChanges();
      });

      it('component creado', ()=>{
        expect(component).toBeTruthy();
      });

      it('buscar heroe', ()=>{
        jest.spyOn(component.heroesService, 'resetPager');
        component.submitSearch();
        expect(component.heroesService.resetPager).toHaveBeenCalled();
      });

      it('prevPage',()=>{
        jest.spyOn(component.heroesService, 'getHeroes');

        component.prevPage();
        expect(component.heroesService.getHeroes).toHaveBeenCalled();
      });

      it('nextPage',()=>{
        jest.spyOn(component.heroesService, 'getHeroes');

        component.nextPage();
        expect(component.heroesService.getHeroes).toHaveBeenCalled();
      });

      it('redirect page hero id', ()=>{
        ngZone.run(()=>{
          jest.spyOn(component['router'], 'navigateByUrl');
        component.go_to(1);
        expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/heroe/1');
        });
        
      })
});

class HeroesServiceMock {
    resetPager(){}
    getHeroes(): Observable<any> {
      return of([{
        "id":"1", 
        "name": 'Superman', 
        "description": '', 
         "modified": "", 
        "thumbnail" : "", 
        "resourceURI": "",
        "teamColor": {
          "color":'azul'
        }
      }]);
    }
}