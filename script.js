//Get Quotes from API

const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

 //Show Loading
// function loading(){
//    loader.hidden = false;
//  }

//  // Hide Loading
//  function complete(){
//    quoteContainer.hidden = false;
//    loader.hidden = true;
//  }

let apiQuotes = []

//Show new quote

function newQuote(){
  // loading();
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
// Check if Author field is blank and replace it with "Unknown"

if(!quote.author){
  authorText.textContent = "unknown";
} else{
  authorText.textContent = quote.author;
}

// Check Quote Length to determine styling
if(quote.text.length > 120){
  quoteText.classList.add("long-quote")
}else{
    quoteText.classList.remove("long-quote")
}

// Set quote, Hide Loader
quoteText.textContent = quote.text;
// complete();
}

async function getQuotes(){
  // loading();
  const apiUrl = "https://type.fit/api/quotes";
  try{
        //The response variable won't be populated until the fetch action is done
// The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
// The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.

    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();

  } catch(error){
    //Catch Error Here
  }
}

// Tweet Quote
function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, '_blank');
}

//Event Listeners

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)



// On Load
getQuotes();
