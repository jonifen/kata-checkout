export default class Item {
	constructor(name, price) {
		this._name = name
		this._price = price
	}

	get price() {
		return this._price
	}

	get name() {
		return this._name
	}
}
