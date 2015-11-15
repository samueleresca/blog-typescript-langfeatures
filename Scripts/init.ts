/// <reference path="Models\Repository\ParkingLot.ts"/>
/// <reference path="Models\Car.ts"/>

var parkingLot= new MyParkingLot("Beautiful St.", 234);


var carFiat= new Car("Fiat", 3.5, 1.2, "Test", "EFGNXXX");
var carOpel= new Car("Opel", 2.5, 1.4, "Test-2", "FFGGXX");
var carCitroen= new Car("Citroen", 1.5, 1.6, "Test-3", "XXXTTH");

//Cars are entering, all tickets are saved
var ticketFiat= parkingLot.parkVehicle(carFiat);
var ticketOpel= parkingLot.parkVehicle(carOpel);
var ticketCitroen= parkingLot.parkVehicle(carCitroen);


//Cars owners returns to parking with ticket..

parkingLot.exitVehicle(ticketFiat);
parkingLot.exitVehicle(ticketOpel);
parkingLot.exitVehicle(ticketCitroen);





