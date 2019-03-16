using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using checkout1;

namespace CheckoutTests
{
    [TestClass]
    public class CheckoutTest
    {
        [TestMethod]
        public void ScanItemAReturns5()
        {
            var checkout = new Checkout();
            checkout.Scan(new Item("A"));
            Assert.AreEqual(new Currency(5), checkout.GetTotal());
        }

        [TestMethod]
        public void ScanItemBReturns10()
        {
            var checkout = new Checkout();
            checkout.Scan(new Item("B"));
            Assert.AreEqual(new Currency(10), checkout.GetTotal());
        }

        [TestMethod]
        public void ScanThreeItemAReturns10()
        {
            var checkout = new Checkout();
            checkout.Scan(new Item("A"), 3);
            Assert.AreEqual(new Currency(10), checkout.GetTotal());
        }

        [TestMethod]
        public void ScanTwoItemBReturns15()
        {
            var checkout = new Checkout();
            checkout.Scan(new Item("B"), 2);
            Assert.AreEqual(new Currency(15), checkout.GetTotal());
        }
    }
}
