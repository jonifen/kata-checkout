namespace checkout1
{
    public class Item
    {
        public Item(string name)
        {
            Name = name;
        }

        public string Name { get; set; }

        public Currency Price
        {
            get
            {
                return new Lists().Prices[Name];
            }
        }
    }
}
