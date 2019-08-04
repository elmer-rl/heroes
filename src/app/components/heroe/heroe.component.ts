import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/model/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe:any ={} ;

  heroes :Heroe ={};
  casa: string;

  constructor(private route : ActivatedRoute, private hero : HeroesService) { 
   
   
    this.route.params.subscribe(data =>{
      this.heroe = data['id'];
      console.log(this.heroe);
      
    });

   }

  ngOnInit() {
   
    this.heroes = this.hero.getHeroes();
    this.heroes = this.heroes[this.heroe];    

    this.casa = this.heroes.casa;
    
  }

}
