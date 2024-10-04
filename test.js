const { fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

test('converts 1 dollar to yen, expects 146.262', () => {
    const yenValue = fromDollarToYen(1);
    expect(yenValue).toBe('146.262');
})

test('converts 100 yen to pounds, expects 0.557', () => {
    const poundValue = fromYenToPound(100);
    expect(poundValue).toBe('0.556');
})

test('converts 1 euro to dollars, expects 1.070', () => {
    const dollarValue = fromEuroToDollar(1);
    expect(dollarValue).toBe('1.070');
})
