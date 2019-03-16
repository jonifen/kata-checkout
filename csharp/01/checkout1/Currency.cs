namespace checkout1
{
    public class Currency
    {
        public Currency(int value)
        {
            Value = value;
        }

        public int Value { get; private set; }

        public override bool Equals(object obj)
        {
            var currencyObj = obj as Currency;
            return Value == currencyObj.Value;
        }

        public override int GetHashCode()
        {
            return Value.GetHashCode();
        }

        public static Currency operator +(Currency c1, Currency c2)
        {
            return new Currency(c1.Value + c2.Value);
        }
    }
}
