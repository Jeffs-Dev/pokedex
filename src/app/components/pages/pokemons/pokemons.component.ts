import { PokemonsService } from './../../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{

  pokemons:any = {}

  constructor(private pokemonService: PokemonsService){

    this.getPokemons()
  }

  ngOnInit(): void{
  }


  getPokemons(): void{


    this.pokemonService.getAll().subscribe((pokemon) => this.pokemons = pokemon.results.map((item:any) => {
      this.pokemons.push(item)
    }))


  }



}
