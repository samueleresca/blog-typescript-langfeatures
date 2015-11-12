/// <reference path="Ticket.ts"/>

class Vehicle {
	private _brand: string;
	private _height: number;
	private _weight: number;

	private _isParked: boolean;
	private _ticket: Ticket;


	constructor(brand: string, height: number, weight: number) {
		this._brand = brand;
		this._height = height;
		this._weight = weight
	}

	parkingVehicle(): Ticket {

		if (!this._isParked) {
			var id = Math.floor(Math.random() * 10).toString();
			var newTck = new Ticket(id, null);
			this._ticket = newTck;
			return newTck;
		}
		return null;
	}

	get Brand() {
		return this._brand;
	}

	set Brand(brand: string) {
		this._brand = brand;
	}

	get Height() {
		return this._height;
	}

	set Height(height: number) {
		this._height = height;
	}

	get Weight() {
		return this._weight;
	}

	set Weight(weight: number) {
		this._weight = weight;
	}

	get Ticket() {
		return this._ticket;
	}
}