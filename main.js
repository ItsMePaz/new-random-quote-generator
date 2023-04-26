import "./style.css";
const genBtn = document.getElementById("getQuote");
const div = document.getElementById("app");
const hey = document.createElement("div");
hey.classList = "content";
div.appendChild(hey);
const h1 = document.createElement("h1");
hey.appendChild(h1);
const p = document.createElement("p");
hey.appendChild(p);

const fetchNewQuote = async () => {
  const response = await fetch("https://api.quotable.io/quotes/random");
  const quote = await response.json();
  return quote;
};

const renderQuote = (quoteObj) => {
  const { author, content } = quoteObj;

  h1.textContent = author;

  p.textContent = content;
};

const generateNewQuote = async () => {
  const data = await fetchNewQuote();
  const quote = data[0];
  renderQuote(quote);
  /* console.log(data.results[0].author); */
};

window.addEventListener("DOMContentLoaded", () => {
  genBtn.addEventListener("click", generateNewQuote);
});
