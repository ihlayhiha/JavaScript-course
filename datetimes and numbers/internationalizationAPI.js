// Internationalization API
// with this API, we can make our application support different languages, currencies, dates etc

// here we talk about formatting dates and numbers using this
const date = new Date();
// day/month/year format
const day = `${date.getDate()}`.padStart(2, '0');
const month = `${date.getMonth() + 1}`.padStart(2, '0');
const year = date.getFullYear();
const hour = `${date.getHours()}`.padStart(2, '0');
const minute = `${date.getMinutes()}`.padStart(2, '0');

console.log(`${day}/${month}/${year},  ${hour}:${minute}`);

// experimenting with the API
const newDate = new Date();
const intlDate = new Intl.DateTimeFormat('en-US').format(newDate);  
// new Intl.DateTimeFormat() creates a formatter for the language and country
// passing the date we want in the .format() onto the formatter gives the result
console.log(intlDate);

const britishDateTime = new Intl.DateTimeFormat('en-GB').format(newDate);
console.log("British way", britishDateTime);
const indianDateTime = new Intl.DateTimeFormat('en-IN').format(newDate);
console.log("Indian way", indianDateTime);
const syriaDateTime = new Intl.DateTimeFormat('ar-SY').format(newDate);
console.log("Arabic Syria DT", syriaDateTime);
const teluguDateTime = new Intl.DateTimeFormat('te-IN').format(newDate);
console.log("Telugu DateTime", teluguDateTime);

// for more DateTime codes, here's the code table
"http://www.lingoes.net/en/translator/langcode.htm";


// defining options object to provide it to the formatter to also return the time
const options = {
    day : "numeric",
    month : "long",
    year : "numeric",
    hour : "numeric",
    minute : "numeric",
    weekday : "long"
};

// taking locale from browser
const locale = navigator.language;
console.log(locale);

const withTime = new Intl.DateTimeFormat('te-IN', options).format(newDate);
console.log(withTime);
const localTime = new Intl.DateTimeFormat(locale, options).format(newDate);
console.log(localTime);

// internationalizing numbers
const rand = 3888223.545;
console.log("US", new Intl.NumberFormat('en-US').format(rand));
console.log("Indian", new Intl.NumberFormat('te-IN').format(rand));
console.log("Syria", new Intl.NumberFormat('ar-SY').format(rand));
console.log("Local", new Intl.NumberFormat(navigator.language).format(rand));

const numOptions = {
    style : "unit",
    unit : "mile-per-hour",
};
console.log("Speed", new Intl.NumberFormat(locale, numOptions).format(rand));
console.log("Speed in US", new Intl.NumberFormat('en-US', numOptions).format(rand));
console.log("Speed in Indian stuff", new Intl.NumberFormat('te-IN', numOptions).format(rand));

const currencies = {
    style : "currency",
    currency : 'EUR',   // currency is not determined by the locale, we have to define the currency. The only thing this does is give a formatter shape
};
console.log("Currency US", new Intl.NumberFormat('en-US', currencies).format(rand));
console.log("Currency UK", new Intl.NumberFormat('en-GB', currencies).format(rand));
console.log("Currency Germany", new Intl.NumberFormat('de-DE', currencies).format(rand));
console.log("Currency Telugu", new Intl.NumberFormat('te-IN', currencies).format(rand));
console.log("Currency Hindi", new Intl.NumberFormat('hi-IN', currencies).format(rand));