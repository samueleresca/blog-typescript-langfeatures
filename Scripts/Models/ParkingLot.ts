/// <reference path="Vehicle.ts"/>
/// <reference path="Utils.ts"/>


interface ParkingLot<V, T> extends Array<V>  {
	parkVehicle(vehicle: V): T;
	exitVehicle(ticket: T): V;
}



class ParkingLotK implements ParkingLot<Vehicle, Ticket> {

	private _vehicles: Vehicle[];


	parkVehicle(vehicle: Vehicle): Ticket {
		var tck= vehicle.parkingCar();
		
		if(tck == null){
			return null;
		} 
				
		return tck;
	}

	exitVehicle(ticket: Ticket): Vehicle {
		var targetId= ticket.getId;
		var target =this._vehicles.find(tmp=>tmp.Ticket().getId==target);
		if(target==null){
			return null;
		}
		return target;
	}
}