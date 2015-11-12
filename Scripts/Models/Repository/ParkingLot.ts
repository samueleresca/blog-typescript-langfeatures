/// <reference path="..\Vehicle.ts"/>
/// <reference path="Utils.ts"/>



interface ParkingLot<V, T> {
	parkVehicle(vehicle: V): T;
	exitVehicle(ticket: T): V;
}

class ParkingLotSimple implements ParkingLot<Vehicle, Ticket>  {

	private _address: string;
	private _capability: number;

	private _vehicles: Array<Vehicle>;
	//TODO:More constructor????
	constructor(address: string, capability: number) {
		this._address = address;
		this._capability = capability;
		this._vehicles = new Array<Vehicle>(this._capability);
	}


	get Vehicles() {
		return this._vehicles;
	}

	get Address() {
		return this._address;
	}

	get Capability() {
		return this._capability;
	}
	parkVehicle(vehicle: Vehicle): Ticket {
		this._vehicles.push(vehicle);

		var tck = vehicle.parkingVehicle();

		if (tck == null) {
			return null;
		}

		return tck;
	}
	exitVehicle(ticket: Ticket): Vehicle {
		var targetId = ticket.Id;
		//TODO: Verifica corretto funzionamento su tuttti i browser
		var target = this._vehicles.find(tmp=> tmp.Ticket.Id == targetId);

		if (target == null) {
			return null;
		}
		return target;
	}
}


