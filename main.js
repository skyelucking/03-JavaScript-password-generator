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