const quotes1 = [
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

const quote1 = document.querySelector("#quote1 span:first-child");
const author1 = document.querySelector("#quote1 span:last-child");

const todaysQuote1 = (quotes1[Math.floor(Math.random() * quotes1.length)]);

quote1.innerText = `"${todaysQuote1.quote}"`;
author1.innerText = `-${todaysQuote1.author}-`;