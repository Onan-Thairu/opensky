import { Injectable } from '@angular/core';
import { Flight } from '../Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  private flights: Flight[] = [
    {
      airport: "DFW",
      time: new Date().toLocaleDateString(),
      arriving: new Date().toLocaleDateString(),
      departing: new Date().toLocaleDateString()
    },
    {
      airport: "Heathrow",
      time: new Date().toLocaleDateString(),
      arriving: new Date().toLocaleDateString(),
      departing: new Date().toLocaleDateString()
    },
    {
      airport: "JFK",
      time: new Date().toLocaleDateString(),
      arriving: new Date().toLocaleDateString(),
      departing: new Date().toLocaleDateString()
    }
  ]
  constructor() { }

  getFlightData() {
    return this.flights
  }
}
