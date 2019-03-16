export default class Currency {
	constructor(value) {
		this._value = value
	}

	get value() {
		return this._value
	}

	add(currency) {
		this._value += currency.value
	}
}
