import { PokeInfoComponent } from './components/pages/pokemons/poke-info/poke-info.component';

import { PokemonsComponent } from './components/pages/pokemons/pokemons.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemons/info', component: PokeInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
