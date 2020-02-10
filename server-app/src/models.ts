import { Vehicle } from './vehicles/vehicles.models';
import { Location } from './locations/locations.models';

export type Route ={
  startLocation: Location,
  endLocation: Location,
  cargos: string[],
  departureDate: Date,
  vehicle: Vehicle
}

export enum TrackStatus {
  Pending = 'pending', 
  Transit = 'transit', 
  Completed = 'completed'
}

// history or current way, can be changeble
export type Track = {
  route: Route,
  status: TrackStatus,
  departureDate: Date,
  arrivalDate: Date
}