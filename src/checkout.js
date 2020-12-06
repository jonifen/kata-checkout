const Checkout = function() {
  const prices = {
    "A": 50,
    "B": 30,
    "C": 20
  };

  const promotions = [
    { item: "A", quantity: 3, priceReduction: 20 },
    { item: "B", quantity: 2, priceReduction: 15 }
  ];

  let items = [];
  let itemCount = {
    "A": 0,
    "B": 0
  };

  this.scan = function(item) {
    items.push(item);

    itemCount[item]++;
  };

  this.getTotal = function() {
    let total = 0;

    items.forEach(item => {
      total += prices[item];
    });

    promotions.forEach(promotion => {
      if(promotion.quantity <= itemCount[promotion.item]) {
        const promotionCount = Math.floor(itemCount[promotion.item] / promotion.quantity);

        total -= promotion.priceReduction * promotionCount;
      }
    });

    return total;
  };
};

export default Checkout;