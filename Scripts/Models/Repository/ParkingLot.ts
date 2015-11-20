/// <reference path="..\Vehicle.ts"/>
/// <reference path="Utils.ts"/>

/*
*Interface ParkingLot
*/
interface ParkingLot<V, T> {
	parkVehicle(vehicle: V): T;
	exitVehicle(ticket: T): V;
}

/*
*Concrete class
*/
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
		if (tck == null) { return null; }

		this._vehicles.push(vehicle);
		return tck;
	}

	exitVehicle(ticket: Ticket): Vehicle {
		ticket.ExitDate = new Date();
		var target = this._vehicles.find(tmp=> typeof tmp !== null && tmp.Ticket.Id == ticket.Id);
		var index = this._vehicles.indexOf(target);

		if (index > -1) { this._vehicles.splice(index, 1); }
		if (target == null) { return null; }

		return target;
	}
}

/*
*Custom ARRAY INTERFACE
*/
interface Array<T> {
	find(predicate: (T) => boolean): T;
}

/*
* Custom array finder by Lambda
*/
if (!Array.prototype.find) {
	Array.prototype.find = function(predicate) {
		if (this == null) {
			throw new TypeError('Array.prototype.find called on null or undefined');
		}
		if (typeof predicate !== 'function') {
			throw new TypeError('predicate must be a function');
		}
		var list = Object(this);
		var length = list.length >>> 0;
		var thisArg = arguments[1];
		var value;

		for (var i = 0; i < length; i++) {
			value = list[i];
			if (predicate.call(thisArg, value, i, list)) {
				return value;
			}
		}
		return undefined;

	};
}





