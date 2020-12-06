import Checkout from "../checkout";

describe("Checkout Kata", () => {
  const testCases = [
    { items: [ "A" ], total: 50 },
    { items: [ "B" ], total: 30 },
    { items: [ "C" ], total: 20 },
    { items: [ "A", "B" ], total: 80 },
    { items: [ "A", "B", "C" ], total: 100 },
    { items: [ "A", "A", "A" ], total: 130 },
    { items: [ "B", "B" ], total: 45 },
    { items: [ "A", "A", "A", "A", "A", "A" ], total: 260 },
    { items: [ "A", "A", "A", "A", "A", "A", "A" ], total: 310 }
  ];

  testCases.forEach(testCase => {
    it(`scans item(s) [${testCase.items}] and returns total of ${testCase.total}`, () => {
      const checkout = new Checkout();

      testCase.items.forEach(item => {
        checkout.scan(item);
      });

      expect(checkout.getTotal()).toBe(testCase.total);
    });
  });
});