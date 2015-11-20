/// <reference path="..\Vehicle.ts"/>
/// <reference path="Utils.ts"/>



interface ParkingLot<V, T> {
	parkVehicle(vehicle: V): T;
	exitVehicle(ticket: T): V;
}

class MyParkingLot implements ParkingLot<Vehicle, Ticket>  {

	private _address: string;

	private _vehicles: Array<Vehicle>;

	constructor(address: string) {
		this._address = address;
		this._vehicles = new Array<Vehicle>();
	}


	get Vehicles() {
		return this._vehicles;
	}

	get Address() {
		return this._address;
	}

	parkVehicle(vehicle: Vehicle): Ticket {
		var tck = vehicle.parkingVehicle();
		this._vehicles.push(vehicle);

		if (tck == undefined) {
			return undefined;
		}
		return tck;
	}
	exitVehicle(ticket: Ticket): Vehicle {
		
		ticket.
		
		var targetId = ticket.Id;
		//TODO: Verifica corretto funzionamento su tuttti i browser
		var target = this._vehicles.find(tmp=> typeof tmp !== null && tmp.Ticket.Id == targetId);
		var index = this._vehicles.indexOf(target);
		if(index>-1){
			this._vehicles.splice(index,1);
		}
		
		if (target == null) {
			return null;
		}
		return target;
	}
}


