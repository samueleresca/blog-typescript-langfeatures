var Ticket = (function () {
    function Ticket(id, exitDate) {
        this._id = id;
        this._enterDate = new Date(); //GET CURRENT DATE
        this._exitDate = exitDate;
    }
    Object.defineProperty(Ticket.prototype, "Id", {
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
    Vehicle.prototype.parkingVehicle = function () {
        if (!this._isParked) {
            var id = Math.floor(Math.random() * 10).toString();
            var newTck = new Ticket(id, null);
            this._ticket = newTck;
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
    Object.defineProperty(Vehicle.prototype, "Weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Ticket", {
        get: function () {
            return this._ticket;
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
/// <reference path="Vehicle.ts"/>
/// <reference path="Utils.ts"/>
var ParkingLotK = (function () {
    //TODO:More constructor????
    function ParkingLotK(address, capability) {
        this._address = address;
        this._capability = capability;
        this._vehicles = new Array(this._capability);
    }
    Object.defineProperty(ParkingLotK.prototype, "Vehicles", {
        get: function () {
            return this._vehicles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParkingLotK.prototype, "Address", {
        get: function () {
            return this._address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParkingLotK.prototype, "Capability", {
        get: function () {
            return this._capability;
        },
        enumerable: true,
        configurable: true
    });
    ParkingLotK.prototype.parkVehicle = function (vehicle) {
        this._vehicles.push(vehicle);
        var tck = vehicle.parkingVehicle();
        if (tck == null) {
            return null;
        }
        return tck;
    };
    ParkingLotK.prototype.exitVehicle = function (ticket) {
        var targetId = ticket.Id;
        //TODO: Verifica corretto funzionamento su tuttti i browser
        var target = this._vehicles.find(function (tmp) { return tmp.Ticket.Id == targetId; });
        if (target == null) {
            return null;
        }
        return target;
    };
    return ParkingLotK;
})();
var test = new Vehicle("Fiat", 2323, 23232);
var parcheggio = new ParkingLotK("Via resistenza 12", 23);
parcheggio.parkVehicle(test);
