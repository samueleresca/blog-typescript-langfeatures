 class Ticket {
	private _id: string;
	private _enterDate: Date;
	private _exitDate: Date;

	constructor(id: string , exitDate: Date) {
		this._id = id;
		this._enterDate = new Date(); //GET CURRENT DATE
		this._exitDate = exitDate;
	}

	get Id() {
		return this._id;
	}

	get EnterDate() {
		return this._enterDate;
	}

	set EnterDate(date: Date) {
		this._enterDate = date;
	}

	get ExitDate() {
		return this._exitDate;
	}

	set ExitDate(date: Date) {
		this._exitDate = date;
	}
}