import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe :any = {};
  @Input() index :number;

  @Output() seleccionado: EventEmitter<number>

  constructor(private router : Router) {
    this.seleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  vermas(){
    this.router.navigate(["/heroe",this.index]);  
    // this.seleccionado.emit(this.index); 
  }

  

}
