
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(dollarAmount){
    let yenAmount = dollarAmount / oneEuroIs.USD * oneEuroIs.JPY;
    return yenAmount.toFixed(3);
}

const fromEuroToDollar = (euroAmount) => {
    let dollarAmount = euroAmount * oneEuroIs.USD;
    return dollarAmount.toFixed(3);
}

const fromYenToPound = (yenAmount) => {
    let poundAmount = yenAmount / oneEuroIs.JPY * oneEuroIs.GBP;
    return poundAmount.toFixed(3);
}


module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};
