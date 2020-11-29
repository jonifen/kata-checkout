using System.Collections.Generic;

namespace checkout1
{
    public class Lists
    {
        public Dictionary<string, Currency> Prices
        {
            get
            {
                return new Dictionary<string, Currency>
                {
                    { "A", new Currency(5) },
                    { "B", new Currency(10) }
                };
            }
        }

        public Dictionary<string, Promotion> Promotions
        {
            get
            {
                return new Dictionary<string, Promotion>
                {
                    { "A", new Promotion(3, new Currency(10)) },
                    { "B", new Promotion(2, new Currency(15)) }
                };
            }
        }
    }
}
