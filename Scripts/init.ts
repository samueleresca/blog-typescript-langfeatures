/// <reference path="Models\Repository\ParkingLot.ts"/>
/// <reference path="Models\Car.ts"/>


//New parking lot in Beautiful St.
var parkingLot= new MyParkingLot("Beautiful St.");

//New cars
var carFiat= new Car("EFGNXXX", "Fiat", 3.5, 1.2, "Test");
var carOpel= new Car("FFGGXX", "Opel", 2.5, 1.4, "Test-2");
var carCitroen= new Car("XXXTTH", "Citroen", 1.5, 1.6, "Test-3");

//Cars are entering, all tickets are saved..
var ticketFiat= parkingLot.parkVehicle(carFiat);
var ticketOpel= parkingLot.parkVehicle(carOpel);
var ticketCitroen= parkingLot.parkVehicle(carCitroen);



//Parking lot exit...
var myCar= parkingLot.exitVehicle(ticketOpel);






