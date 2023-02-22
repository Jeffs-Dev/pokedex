import { PokemonsService } from './../../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonsService) {
    this.getPokemons();
  }

  ngOnInit(): void {}

  async getPokemons() {
    await this.pokemonService.getMainData().subscribe((pokemon) => {
      pokemon.results.forEach((result: any) => {
        this.pokemonService.getMoreData(result.name).subscribe((data: any) => {
          this.pokemons.push(data);
        });
      });

      console.log(this.pokemons);
    });
  }

  getTypeColor(type: string) {
    if (type === 'water') {
      return '#0080ff';
    } else if (type === 'fire') {
      return '#d52100';
    } else if (type === 'poison') {
      return '#88447a';
    } else if (type === 'grass') {
      return '#20df70';
    } else if (type === 'bug') {
      return '#83901a';
    } else if (type === 'flying') {
      return '#556dff';
    } else if (type === 'normal') {
      return '#797964';
    } else if (type === 'electric') {
      return '#c90';
    } else if (type === 'ground') {
      return '#bf9926';
    } else if (type === 'psychic') {
      return '#ff227a';
    } else if (type === 'fairy') {
      return '#e76de7';
    } else if (type === 'rock') {
      return '#a59249';
    } else if (type === 'dragon') {
      return '#4e38e9';
    } else if (type === 'ice') {
      return '#0af';
    } else if (type === 'dark') {
      return '#573e31';
    } else if (type === 'steel') {
      return '#8e8ea4';
    } else if (type === 'ghost') {
      return '#5454b3';
    } else if (type === 'fighting') {
      return '#a84d3d';
    } else {
      return;
    }
  }

}
