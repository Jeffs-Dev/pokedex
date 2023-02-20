import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';


@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent {

  pokemonSelected: any = {}

constructor(private pokemonsService:PokemonsService, private route: ActivatedRoute){

  this.getPokemon();
}

getPokemon(){

  const name = String(this.route.snapshot.paramMap.get("name"))

  this.pokemonsService.getPokemon(name).subscribe((pokemon) =>{
    this.pokemonSelected = pokemon;

    console.log(this.pokemonSelected)
  })



};

}
