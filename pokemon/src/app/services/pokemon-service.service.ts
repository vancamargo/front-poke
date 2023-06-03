import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  private apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}
  getPokemon(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vehicleList`);
  }

  postPokemon(Vehicle: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/vehicleList`, Vehicle);
  }

  putPokemon(Vehicle: any, id: number) {
    return this.http.put<any>(`${this.apiUrl}/vehicleList/${id}`, Vehicle);
  }

  getPokemonById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/vehicleList/${id}`);
  }

  deletePokemon(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/vehicleList/${id}`);
  }
}
