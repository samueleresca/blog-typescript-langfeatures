var Ticket = (function () {
    function Ticket(parking_lot) {
        this._id = parking_lot + "-" + ((new Date()).getTime().toString());
        this._enterDate = new Date(); //GET CURRENT DATE
        this._exitDate = null;
    }
    Object.defineProperty(Ticket.prototype, "Id", {
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "EnterDate", {
        get: function () { return this._enterDate; },
        set: function (date) { this._enterDate = date; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "ExitDate", {
        get: function () { return this._exitDate; },
        set: function (date) { this._exitDate = date; },
        enumerable: true,
        configurable: true
    });
    return Ticket;
})();
/// <reference path="Ticket.ts"/>
var Vehicle = (function () {
    function Vehicle(license_plate, brand, height, weight) {
        this._brand = brand;
        this._height = height;
        this._weight = weight;
        this._license_plate = license_plate;
    }
    Vehicle.prototype.parkingVehicle = function () {
        if (!this._isParked) {
            var newTck = new Ticket(this._license_plate);
            this._ticket = newTck;
            this._isParked = true;
            return newTck;
        }
        return null;
    };
    Object.defineProperty(Vehicle.prototype, "Brand", {
        get: function () { return this._brand; },
        set: function (brand) { this._brand = brand; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Height", {
        get: function () { return this._height; },
        set: function (height) { this._height = height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Weight", {
        get: function () { return this._weight; },
        set: function (weight) { this._weight = weight; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Ticket", {
        get: function () { return this._ticket; },
        enumerable: true,
        configurable: true
    });
    Vehicle.prototype.clearTicket = function () {
        this._ticket = null;
    };
    return Vehicle;
})();
/// <reference path="Vehicle.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(license_plate, brand, height, weight, car_insurance) {
        _super.call(this, license_plate, brand, height, weight);
        this._car_insurance = car_insurance;
    }
    Object.defineProperty(Car.prototype, "CarInsurance", {
        get: function () { return this._car_insurance; },
        set: function (car_insurance) { this._car_insurance = car_insurance; },
        enumerable: true,
        configurable: true
    });
    return Car;
})(Vehicle);
/*
* Custom array finder by Lambda
*/
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
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
/// <reference path="..\Vehicle.ts"/>
/// <reference path="Utils.ts"/>
var MyParkingLot = (function () {
    function MyParkingLot(address) {
        this._address = address;
        this._vehicles = new Array();
    }
    Object.defineProperty(MyParkingLot.prototype, "Vehicles", {
        get: function () {
            return this._vehicles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyParkingLot.prototype, "Address", {
        get: function () {
            return this._address;
        },
        enumerable: true,
        configurable: true
    });
    MyParkingLot.prototype.parkVehicle = function (vehicle) {
        var tck = vehicle.parkingVehicle();
        if (tck == null) {
            return null;
        }
        this._vehicles.push(vehicle);
        return tck;
    };
    MyParkingLot.prototype.exitVehicle = function (ticket) {
        ticket.ExitDate = new Date();
        var target = this._vehicles.find(function (tmp) { return typeof tmp !== null && tmp.Ticket.Id == ticket.Id; });
        var index = this._vehicles.indexOf(target);
        if (index > -1) {
            this._vehicles.splice(index, 1);
        }
        if (target == null) {
            return null;
        }
        return target;
    };
    return MyParkingLot;
})();
/// <reference path="Models\Repository\ParkingLot.ts"/>
/// <reference path="Models\Car.ts"/>
//New parking lot in Beautiful St.
var parkingLot = new MyParkingLot("Beautiful St.");
//New cars
var carFiat = new Car("EFGNXXX", "Fiat", 3.5, 1.2, "Test");
var carOpel = new Car("FFGGXX", "Opel", 2.5, 1.4, "Test-2");
var carCitroen = new Car("XXXTTH", "Citroen", 1.5, 1.6, "Test-3");
//Cars are entering, all tickets are saved..
var ticketFiat = parkingLot.parkVehicle(carFiat);
var ticketOpel = parkingLot.parkVehicle(carOpel);
var ticketCitroen = parkingLot.parkVehicle(carCitroen);
//Parking lot exit...
var myCar = parkingLot.exitVehicle(ticketOpel);
//# sourceMappingURL=main.js.map