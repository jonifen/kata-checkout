export default class Promotion {
	constructor(quantity, price) {
		this._quantity = quantity
		this._price = price
	}

	get quantity() {
		return this._quantity
	}

	get price() {
		return this._price
	}
}
