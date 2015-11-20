/// <reference path="Vehicle.ts"/>


class Car extends Vehicle {

	private _car_insurance: string;

	constructor(license_plate: string, brand: string, height: number, weight: number, car_insurance: string) {
		super(license_plate, brand, height, weight);
		this._car_insurance = car_insurance;
	}

	get CarInsurance() {return this._car_insurance;}
	set CarInsurance(car_insurance: string) {this._car_insurance = car_insurance;}

}

