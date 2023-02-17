import { PokemonsService } from './../../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons: any = {};
  pokemonsNames: any = [];

  constructor(private pokemonService: PokemonsService) {
    this.getPokemons();
  }

  ngOnInit(): void {}

  getPokemons(): void {
    try {
      this.pokemonService.getAll().subscribe((pokemon) => {
        /* console.log(pokemon) */
        this.pokemons = pokemon;

        this.pokemons.results.map((item: any) => {
          this.pokemonsNames.push(item.name);
        });
      });
    } catch (err) {
      console.log(err);
    }
  }
}
