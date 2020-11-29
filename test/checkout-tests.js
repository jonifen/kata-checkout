import assert from 'assert'
import Checkout from './../app/checkout'
import Currency from './../app/currency'

describe("Checkout", function() {
	var _checkout = null

	beforeEach(function() {
		_checkout = new Checkout()
	})

	it("should return 5 when 1x Item A scanned", function() {
		_checkout.scan("A")
		assert.deepEqual(new Currency(5), _checkout.total)
	})

	it("should return 10 when 1x Item B scanned", function() {
		_checkout.scan("B")
		assert.deepEqual(new Currency(10), _checkout.total)
	})

	it("should return 10 when 3x Item A scanned", function() {
		_checkout.scan("A")
		_checkout.scan("A")
		_checkout.scan("A")
		assert.deepEqual(new Currency(10), _checkout.total)
	})

	it("should return 15 when 2x Item B scanned", function() {
		_checkout.scan("B")
		_checkout.scan("B")
		assert.deepEqual(new Currency(15), _checkout.total)
	})
})

describe("Checkout - Dynamic Tests", function() {
	var _checkout = null
	var tests = [
		{ item: "A", quantity: 1, expected: new Currency(5) },
		{ item: "B", quantity: 1, expected: new Currency(10) },
		{ item: "A", quantity: 3, expected: new Currency(10) },
		{ item: "B", quantity: 2, expected: new Currency(15) }
	]

	beforeEach(function() {
		_checkout = new Checkout()
	})

	tests.forEach(function(test) {
		it("should return " + test.expected.value + " when " + test.quantity + "x Item " + test.item + " scanned", function() {
			for (var i = 0; i < test.quantity; i++) {
				_checkout.scan(test.item)
			}
			assert.deepEqual(test.expected, _checkout.total)
		})
	})
})
