class Vehicle {
	private _brand: string;
	private _height: number;
	private _weight: number;


	constructor(brand: string, height: number, weight: number) {
		this._brand = brand;
		this._height = height;
		this._weight = weight
	}

	get getBrand() {
		return this._brand;
	}

	set setBrand(brand: string) {
		this._brand = brand;
	}

	get getHeight() {
		return this._height;
	}

	set setHeight(height: number) {
		this._height = height;
	}


	get getWeight() {
		return this._weight;
	}

	set setWeight(weight: number) {
		this._weight = weight;
	}


}