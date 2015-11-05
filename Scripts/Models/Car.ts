/// <reference path="Vehicle.ts"/>
class Car extends Vehicle{
	private meo: string;
	constructor( name: string){
		super(name);
		this.meo=name;
	}
	
	public test(){
		alert(meo.toString());
	}
}

var meo = new Car("test");

meo.test();