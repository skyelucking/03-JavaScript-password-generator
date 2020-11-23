
//DOM elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const uppercaseEL = document.getElementById('uppercase');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//Generate Event listen
generateEL.addEventListener('click', () => {
    const length = +lengthEL.value;
    const hasLower = lowercaseEL.checked;
    const hasUpper = uppercaseEL.checked;
    const hasNumber = numbersEL.checked;
    const hasSymbol = symbolsEL.checked;
    
    resultEL.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
        );
});

//Copy password to clipboard
clipboardEL.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEL.innerText;

if(!password) {
    return;
}
textarea.value = password;
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
textarea.remove();
alert('Password copied to clipboard. Woohoo!')
})

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
    //1. Initiate password var
    //2. Filter out unchecked types
    //3. Loop over length and call a generator function for each type
    //4. Add final pw to the pw variable and then return
let generatedPassword = '';

const typesCount = lower + upper + number + symbol;
console.log('typesCount: ', typesCount);

const typesArr =[{lower}, {upper}, {number}, {symbol}].filter
(
    item => Object.values(item)[0]
);

console.log('typesArr: ', typesArr);
if(typesCount === 0) {
    return '';
}

for (let i = 0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type) [0];

console.log('funcName: ', funcName)

      generatedPassword += randomFunc[funcName]();
    });
}


const finalPassword = (generatedPassword.slice(0, length))

return finalPassword;

}


// Generator Functions  - charset link: http://www.net-comber.com/charset.html//
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()* 26 + 97));
}
    console.log(getRandomLower());

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()* 26 + 65));
}
    console.log(getRandomUpper());

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()* 10 + 48));
}
    console.log(getRandomNumber());
    
function getRandomSymbol() {
    const symbols = '!@#$%^&()_+?';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
    console.log(getRandomSymbol());