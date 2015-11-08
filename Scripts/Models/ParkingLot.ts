/// <reference path="Vehicle.ts"/>

interface ParkingLot<V, T> {
	parkVehicle(vehicle: V): T;
	exitVehicle(ticket: T): V;
}



class ParkingLotK implements ParkingLot<Vehicle, Ticket> {

	private _vehicles: Vehicle[];

	constructor(vehicles: Vehicle[]) {
		this._vehicles = vehicles;
	}

	parkVehicle(vehicle: Vehicle): Ticket {
		return new Ticket(null, null);
	}

	exitVehicle(ticket: Ticket): Vehicle {
		return new Vehicle(null, null, null);
	}
}