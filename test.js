const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(1)).toBe(1.07);
})

test("156.5 yen should be 0.87 units of brit money mate", function(){
    expect(fromYenToPound(156.5)).toBe(0.87);
})

test("1.07 dollars should be 156.5 yen", function(){
    expect(fromDollarToYen(1.07)).toBe(156.5);
})