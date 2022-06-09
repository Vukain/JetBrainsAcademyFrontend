const input = require('sync-input');

const currencies = {
    'USD': 1,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75
};

const currencyChecker = (currency) => {
    return (currency in currencies)
}

const amountCalc = (amount, fromCurrency, toCurrency) => {
    if (isNaN(amount)) {
        console.log('The amount has to be a number')
    } else if (amount < 1) {
        console.log('The amount can not be less than ' + 1)
    } else {
        console.log(`Result: ${amount} ${fromCurrency} equals ${(amount * currencies[toCurrency] / currencies[fromCurrency]).toFixed(4)} ${toCurrency}`)
    }
}

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

let option;

do {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    option = parseInt(input());

    if (option === 1) {
        console.log('What do you want to convert?')
        const currencyFrom = input('From: ').toUpperCase();
        console.log(123);
        if (currencyChecker(currencyFrom)) {
            const currencyTo = input('To: ').toUpperCase();
            if (currencyChecker(currencyTo)) {
                const amount = input('Amount: ');
                amountCalc(amount, currencyFrom, currencyTo);
            } else {
                console.log('Unknown currency');
            };
        } else {
            console.log('Unknown currency');
        }
    } else if (option !== 2) {
        console.log('Unknown input')
    };
} while (option !== 2);

console.log('Have a nice day!')