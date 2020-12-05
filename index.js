const results = document.getElementById("results");

const createResults = (data) =>
  results.insertAdjacentHTML(
    "beforeend",
    `<div class="res">
    <h3 class="res-head">${data.title}</h3>
  <p class="res-snip">${data.snippet}</p>
  <a class="res-link" href="http://en.wikipedia.org/?curid=${data.pageid}">View Full</a>
  </div>`
  );

const handleSubmit = async (e) => {
  e.preventDefault();
  const query = document.getElementById("searchquery");
  const call = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query.value
      .trim()
      .replace(" ", "%20")}`
  );
  const data = await call.json();
  console.log(data);
  results.innerHTML = "";
  query.value = "";
  data.query.search.forEach(createResults);
};

const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);
