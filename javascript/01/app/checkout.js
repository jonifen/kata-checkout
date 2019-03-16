import Item from './item'
import Promotion from './promotion'
import Currency from './currency'

export default class Checkout {
	constructor() {
		this._total = new Currency(0)
		this._prices = this._getPrices()
		this._promotions = this._getPromotions()
		this._scannedItems = {}
	}

	scan(item) {
		this._total.add(this._prices[item].price)
		if (!this._scannedItems[item])
			this._scannedItems[item] = 0
		this._scannedItems[item]++
		this._calculatePromotions(item)
	}

	get total() {
		return this._total
	}

	_getPrices() {
		let prices = {}
		prices["A"] = new Item("A", new Currency(5))
		prices["B"] = new Item("B", new Currency(10))
		return prices
	}

	_getPromotions() {
		let promos = {}
		promos["A"] = new Promotion(3, new Currency(-5))
		promos["B"] = new Promotion(2, new Currency(-5))
		return promos
	}

	_calculatePromotions(item) {
		if (this._promotions[item]) {
			if (this._scannedItems[item] === this._promotions[item].quantity) {
				this._total.add(this._promotions[item].price)
			}
		}
	}
}
