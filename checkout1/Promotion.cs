namespace checkout1
{
    public class Promotion
    {
        public Promotion(int quantity, Currency price)
        {
            Quantity = quantity;
            Price = price;
        }

        public int Quantity { get; set; }
        public Currency Price { get; set; }
    }
}
