var Ticket = (function () {
    function Ticket(id, exitDate) {
        this._id = id;
        this._enterDate = new Date(); //GET CURRENT DATE
        this._exitDate = exitDate;
    }
    Object.defineProperty(Ticket.prototype, "getId", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "EnterDate", {
        get: function () {
            return this._enterDate;
        },
        set: function (date) {
            this._enterDate = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "ExitDate", {
        get: function () {
            return this._exitDate;
        },
        set: function (date) {
            this._exitDate = date;
        },
        enumerable: true,
        configurable: true
    });
    return Ticket;
})();
/// <reference path="Ticket.ts"/>
var Vehicle = (function () {
    function Vehicle(brand, height, weight) {
        this._brand = brand;
        this._height = height;
        this._weight = weight;
    }
    Vehicle.prototype.parkingCar = function () {
        if (!this._isParked) {
            var id = Math.floor(Math.random() * 10).toString();
            var newTck = new Ticket(id, null);
            return newTck;
        }
        return null;
    };
    Object.defineProperty(Vehicle.prototype, "Brand", {
        get: function () {
            return this._brand;
        },
        set: function (brand) {
            this._brand = brand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "getWeight", {
        get: function () {
            return this._weight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "setWeight", {
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    return Vehicle;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="Vehicle.ts"/>
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(brand, height, weight, car_insurance, license_plate) {
        _super.call(this, brand, height, weight);
        this._car_insurance = car_insurance;
        this._license_plate = license_plate;
    }
    Object.defineProperty(Car.prototype, "CarInsurance", {
        get: function () {
            return this._car_insurance;
        },
        set: function (car_insurance) {
            this._car_insurance = car_insurance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "LicensePlate", {
        get: function () {
            return this._license_plate;
        },
        set: function (license_plate) {
            this._license_plate = license_plate;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
})(Vehicle);
/// <reference path="Vehicle.ts"/>
var ParkingLotK = (function () {
    function ParkingLotK(vehicles) {
        this._vehicles = vehicles;
    }
    ParkingLotK.prototype.parkVehicle = function (vehicle) {
        return new Ticket(null, null);
    };
    ParkingLotK.prototype.exitVehicle = function (ticket) {
        return new Vehicle(null, null, null);
    };
    return ParkingLotK;
})();
