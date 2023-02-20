import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private apiGen1 = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=9';

  constructor(private http: HttpClient) {}

  getMainData(): Observable<any> {
    return this.http.get<any>(this.apiGen1);
  }

  getMoreData(name: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
