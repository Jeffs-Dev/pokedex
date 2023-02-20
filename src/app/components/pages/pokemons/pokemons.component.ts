import { PokemonsService } from './../../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];
  typeColors: string[] = ['poison', 'fire', 'water']


  constructor(private pokemonService: PokemonsService) {
    this.getPokemons();
  }

  ngOnInit(): void {}

   async getPokemons(){
    await this.pokemonService.getMainData().subscribe((pokemon) => {
      pokemon.results.forEach((result: any) => {
        this.pokemonService.getMoreData(result.name).subscribe((data: any) => {
          this.pokemons.push(data);

        });
      });

      console.log(this.pokemons);
    });
  }



 /*  getTypeColor(color: string)
  {
    switch (color) {
      case 'poison':
        return 'green';
      case 'water':
        return 'blue';
      case 'fire':
        return 'red';
    }
  } */
}
