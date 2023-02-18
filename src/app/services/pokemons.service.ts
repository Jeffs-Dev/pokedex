import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private apiGen1 = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';



  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get<any>(this.apiGen1);
  }





}
