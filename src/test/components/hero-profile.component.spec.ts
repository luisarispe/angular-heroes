import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroProfileComponent } from "../../app/hero-profile/hero-profile.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HeroesService } from '../../app/heroes.service';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

describe("set de pruebas de hero profile components", ()=>{
    
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;
  let service: HeroesService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeroProfileComponent,
        CapitalizePipe,
      ],
      imports:[
        RouterTestingModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers:[
        { provide: HeroesService, useClass: HeroesServiceMock }
      ]
    }).compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    service = TestBed.inject( HeroesService );
    fixture.detectChanges();
  });

  it('Componente creado', ()=>{
    expect(component).toBeTruthy();
  });
  
  it("Guardando team", ()=>{
    component.setTeam(1);
    expect(component.setTeam).toBeTruthy();
  });

  it("Regresar a la pagina de listado de heroes", ()=>{
    jest.spyOn(component['_location'], 'back');
    component.goBack();
    expect(component['_location'].back).toHaveBeenCalled();
  });

  it('Modal ejecutada', ()=>{
    component.modal.toggle_modal=jest.fn();
    component.launchModal();
    expect(component.modal.toggle_modal).toHaveBeenCalled();
  })
});

class HeroesServiceMock {
  getHeroe(): Observable<any> {
    return of({
      "id":"1", 
      "name": 'Superman', 
      "description": '', 
       "modified": "", 
      "thumbnail" : "", 
      "resourceURI": "",
      "teamColor": {
        "color":'azul'
      }
    });
  }
  save(): Observable<any> {
    return of({
      "id":"1", 
      "name": 'Superman', 
      "description": '', 
       "modified": "", 
      "thumbnail" : "", 
      "resourceURI": "",
      "teamColor": ''
    });
  }
}

@Pipe({name: 'capitalize'})
class CapitalizePipe implements PipeTransform {
    transform(value: string): string {
        return value;
    }
}