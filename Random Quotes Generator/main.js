let quotesNumber = document.querySelector(".quotes-number");
let quotesDisplay = document.querySelector(".quote-display");
let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let autoStatus = document.querySelector(".auto-status");
let wonerQuote = document.querySelector(".wonerquote");
let interValId;

generateBtn.onclick = generateQuotes;
autoBtn.onclick = generateAutoPlay;
stopBtn.onclick = stopGenerateAutoPlay;

async function getQuotes() {
    const response = await fetch("quote.json");
    const data = await response.json();
    return data
}

async function generateQuotes() {
    const quotes = await getQuotes();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quotesDisplay.innerHTML = quote.quote;
    quotesNumber.innerHTML = quote.id;
    wonerQuote.innerHTML = quote.author;
}

function generateAutoPlay() {
    interValId = setInterval(generateQuotes, 5000);
    autoStatus.innerHTML = "Auto: ON";
}

function stopGenerateAutoPlay() {
    clearInterval(interValId);
    autoStatus.innerHTML = "";
}