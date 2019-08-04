import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeBuscadoComponent } from './components/heroe-buscado/heroe-buscado.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},  
  {path : '*' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'heroes' , component : HeroesComponent},
  {path : 'heroe/:id' , component : HeroeComponent},
  {path : 'busqueda/:heroe' , component : HeroeBuscadoComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
