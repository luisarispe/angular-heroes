import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';


@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit{
  @ViewChild('modal') modal;
  private id;
  public heroe: Heroe;
  public question_modal: string;
  public team:string = "";
  public variable:number=0;
  constructor(private route: ActivatedRoute, private heroesService: HeroesService, private _location: Location) { }
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getOne();
    });
    
  }
  getOne(){
    this.heroesService.getHeroe(this.id).subscribe(data => {
      const temp = data;
      this.heroe = new Heroe(temp.id, temp.name, temp.description, temp. modified, temp.thumbnail, temp.resourceURI,temp.teamColor);
      if(this.heroe.teamColor) this.team=this.heroe.teamColor.color;
    });
  }
  goBack() {
    this._location.back();
  }

  setTeam(team):void{
    this.team = team;
    this.heroesService.save(this.heroe.id, this.team).subscribe({
      next:(resp)=>{
        this.getOne();
      }
    });
  }

  launchModal():void{
    //this.question_modal="¿Dónde ubicarías a tu súper héroe?";
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }
}
