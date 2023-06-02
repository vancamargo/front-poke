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
  getVehicle(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vehicleList`);
  }
}
