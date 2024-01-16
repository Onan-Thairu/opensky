import { Injectable } from '@angular/core';
import { Flight } from '../Flight';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  private apiUrl: string = "https://opensky-network.org/api";

  constructor(private http: HttpClient) { }

  getFlightData() {
    return this.http.get(`${this.apiUrl}/flights/arrival`)

  }
}