const quoteText = document.querySelector(".quote-text"),
    quoteBtn = document.querySelector(".buttons button"),
    authorName = document.querySelector(".author"),
    twitterBtn = document.querySelector(".icon");

randomQuote();
// function randomQuote(){
//     quoteBtn.classList.add("loading");
//     quoteBtn.innerText = "Loading Quote...";
//     fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
//         quoteText.innerText = result.content;
//         authorName.innerText = result.author;
//         quoteBtn.classList.remove("loading");
//         quoteBtn.innerText = "New Quote";
//     });
// }

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    $.get("http://quotes.stormconsultancy.co.uk/random.json", "",
        function(result) {
            quoteText.innerText = result.quote;
            authorName.innerText = result.author;
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);