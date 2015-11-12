/// <reference path="Vehicle.ts"/>
/// <reference path="Utils.ts"/>


interface ParkingLot<V, T> {
	parkVehicle(vehicle: V): T;
	exitVehicle(ticket: T): V;
}




class ParkingLotK implements ParkingLot<Vehicle, Ticket>  {

	private _vehicles: Array<Vehicle>;
	//TODO:More constructor????
	constructor(){
		this._vehicles=new Array<Vehicle>();
	}
	
	parkVehicle(vehicle: Vehicle): Ticket {
		this._vehicles.push(vehicle);
		
		var tck= vehicle.parkingVehicle();
		
		if(tck == null){
			return null;
		} 
				
		return tck;
	}

	exitVehicle(ticket: Ticket): Vehicle {
		var targetId= ticket.Id;
		//TODO: Verifica corretto funzionamento su tuttti i browser
		var target =this._vehicles.find(tmp=>tmp.Ticket.Id==targetId);
		
		if(target==null){
			return null;
		}
		return target;
	}
	
	
	get Vehicles(){
		return this._vehicles;
	}
}



var test= new Vehicle("Fiat",2323,23232);
var parcheggio = new ParkingLotK();

parcheggio.parkVehicle(test);

