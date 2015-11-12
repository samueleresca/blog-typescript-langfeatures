/// <reference path="Models\Repository\ParkingLot.ts"/>
/// <reference path="Models\Car.ts"/>

var parkingLot= new ParkingLotSimple("Beautiful St.", 234);


var carFiat= new Car("Fiat", 3.5, 1.2, "Test", "EFGNXXX");
var carOpel= new Car("Opel", 2.5, 1.4, "Test-2", "FFGGXX");
var carCitroen= new Car("Citroen", 1.5, 1.6, "Test-3", "XXXTTH");

parkingLot.parkVehicle(carFiat);
parkingLot.parkVehicle(carOpel);
parkingLot.parkVehicle(carOpel);



