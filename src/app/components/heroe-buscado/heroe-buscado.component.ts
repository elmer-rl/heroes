import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/model/heroe';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html',
  styleUrls: ['./heroe-buscado.component.scss']
})
export class HeroeBuscadoComponent implements OnInit {

  heroes :any[] = [];
  heroeencotrado:any={};

  constructor(private active: ActivatedRoute, private heroe:HeroesService,public router :  Router) { }

  ngOnInit() {
    this.active.params.subscribe((data) => {
      this.heroeencotrado = data['heroe'];
      this.heroes = this.heroe.buscarHeroes(data['heroe']);
      console.log('HEroes',this.heroes);
      
    });
    
    
  }

  vermas(){
    this.router.navigate(["/heroe",this.heroes['idx']]);  
  }


}
