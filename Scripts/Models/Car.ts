/// <reference path="Vehicle.ts"/>
class Car extends Vehicle {

	private _car_insurance: string;

	private _license_plate: string;

	constructor(brand: string, height: number, weight: number, car_insurance: string, license_plate: string) {
		super(brand, height, weight);
		this._car_insurance = car_insurance;
		this._license_plate = license_plate;
	}

	get getCarInsurance() {
		return this._car_insurance;
	}

	set setCarInsurance(car_insurance: string) {
		this._car_insurance = car_insurance;
	}


	get getLicensePlate() {
		return this._license_plate;
	}

	set setLicensePlate(license_plate: string) {
		this._license_plate = license_plate;
	}

}
