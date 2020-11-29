namespace checkout1
{
    public class Checkout
    {
        private Currency _price = new Currency(0);

        public void Scan(Item item)
        {
            Scan(item, 1);
        }

        public void Scan(Item item, int quantity)
        {
            var promotion = new Lists().Promotions[item.Name];
            if (promotion != null && promotion.Quantity == quantity)
                _price += promotion.Price;
            else
                _price += new Lists().Prices[item.Name];
        }

        public Currency GetTotal()
        {
            return _price;
        }
    }
}
