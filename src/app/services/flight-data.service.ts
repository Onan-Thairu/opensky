import { Injectable } from '@angular/core';
import { Flight } from '../Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  private flights: Flight[] = [
    {
      icao24: "icao24",
      callsign: "callsign",
      origin_country: "Kenya",
      time_position: 24524352,
      longitude: 34.2345243,
      latitude: -1.123451324
    },
    {
      icao24: "icao24",
      callsign: "callsign",
      origin_country: "Somalia",
      time_position: 24524352,
      longitude: 34.2345243,
      latitude: -1.123451324
    },
    {
      icao24: "icao24",
      callsign: "callsign",
      origin_country: "South Africa",
      time_position: 24524352,
      longitude: 34.2345243,
      latitude: -1.123451324
    }
  ]
  constructor() { }

  getFlightData() {
    return this.flights
  }
}
