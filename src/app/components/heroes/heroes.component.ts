import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/model/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes :Heroe[]= [];


  constructor(private heroe:HeroesService, public router :  Router) { 

  }

  ngOnInit() {
   this.heroes = this.heroe.getHeroes();
  //  console.log(this.heroes);
   
  }

  vermas(idx){
    this.router.navigate(["/heroe",idx]);  
  }

}
