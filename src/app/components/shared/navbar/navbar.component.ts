import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/model/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private  route : Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    this.route.navigate(['busqueda',termino]);
  }

}
