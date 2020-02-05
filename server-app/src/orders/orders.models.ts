import * as mongoose from 'mongoose';

import { Location } from '../models';

export enum TrackStatus {
  Pending = 'pending', 
  Transit = 'transit', 
  Completed = 'completed'
}

export enum VehicleType {
  Plain = 'plain',
  Car = 'car',
  Train = 'train'
}

export type Vehicle = {
  destination: Location,
  date: Date,
  type: VehicleType
}

export type Route ={
  startLocation: Location,
  endLocation: Location,
  cargos: string[],
  departureDate: Date,
  vehicle: Vehicle
}

export type Track = {
  route: Route,
  status: TrackStatus,
  departureDate: Date,
  arrivalDate: Date
}

export interface Order extends mongoose.Document {
  description: string,
  tracks: Track[],
  userId: string,
  price: number,
  status: boolean,
  routes: Route[]
}