


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(USD){
    let JPY = USD / 107 * 100 * 156.5;
    JPY = Number(JPY.toFixed(3));
    return JPY;
}

function fromEuroToDollar(EURO){
    let USD = EURO / 100 * 107;
    USD = Number(USD.toFixed(3));
    return USD;
}

function fromYenToPound(JPY){
    let GBP = JPY / 156.5 * 0.87;
    GBP = Number(GBP.toFixed(3));
    return GBP;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};