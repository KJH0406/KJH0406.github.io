const quotes = [
    {
        quote : "Love asks me no questions, and gives me endless support",
        author : "William Shakespeare",
    },
    {
        quote : "Do not be afraid to give up the good to go for the great",
        author : "John D. Rockefeller",
    },
    {
        quote : "Tough times never last, but tough people do",
        author : "Robert H. Schuller",
    },
    {
        quote : "I've failed over and over and over again in my life and that is why I succeed",
        author : " Michael Jordan",
    },
    {
        quote : "It is better to fail in originality than to succeed in imitation",
        author : "Herman Melville",
    },
    {
        quote : "Success is walking from failure to failure with no loss of enthusiasm",
        author : " Winston Churchill",
    },
    {
        quote : "The way to get started is to quit talking and begin doing",
        author : " Walt Disney",
    },
    {
        quote : "In order to succeed, we must first believe that we can",
        author : "Nikos Kazantzakis",
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author : "Nelson Mandela",
    },
    {
        quote : "Success usually comes to those who are too busy to be looking for it",
        author : "Henry David Thoreau",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}-`;