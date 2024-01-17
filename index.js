const API_url = "https://api.quotable.io/random";
const h3 = document.querySelector("h3");
const p = document.querySelector("p");

async function newQuote() {
  const data = await fetch(API_url);
  const result = await data.json();

  h3.innerHTML = `"${result.content}"`;
  p.innerHTML = `${result.author}`;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet/?text=" +
      h3.innerHTML +
      "----- by" +
      p.innerHTML,
    "Tweet Window",
    "width = 600, height=300"
  );
}

const quotebtn = document.querySelector(".quote");
quotebtn.addEventListener("click", newQuote);

newQuote();
