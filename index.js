const quoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const quoteText = document.getElementById("quote")
const quoteAuthor = document.getElementById("author")


let apiQuote =[];

function logQuote(){
const randomQuote = apiQuote[Math.floor(Math.random()*apiQuote.length)]


if(!randomQuote.author){
  quoteAuthor.textContent = "Unknown"

} else {
quoteAuthor.textContent = randomQuote.author
}

quoteText.textContent = randomQuote.text
}


async function getQuote(){

  const apiUrl = "https://type.fit/api/quotes";
//The response variable won't be populated until the fetch action is done
// The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
// The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
  try{
    const response = await fetch(apiUrl);
     apiQuote = await response.json()
logQuote();

}
  catch (e){
    //Catch Error Here
        console.error(e);

  }

}



// Tweet Quote 

function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
    window.open(twitterUrl, '_blank');
}

quoteBtn.addEventListener('click',getQuote)
twitterBtn.addEventListener('click', tweetQuote)



getQuote();