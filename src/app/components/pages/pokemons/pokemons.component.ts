import { PokemonsService } from './../../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {

  pokemons: any[] = []

  constructor(private pokemonService: PokemonsService) {
    this.getPokemons();
  }

  ngOnInit(): void {}

  getPokemons(): void {
    this.pokemonService.getMainData().subscribe((pokemon) => {
        pokemon.results.forEach((result:any) => {
          this.pokemonService.getMoreData(result.name).subscribe((data:any) =>{
            this.pokemons.push(data)
          })
        })

        console.log(this.pokemons)
    });
  }









}
