async function fetchPoems() {
  const URL =
    "https://raw.githubusercontent.com/adoniscanada/anapest-news/refs/heads/main/poems.json";
  const response = await fetch(URL);
  const data = await response.text();
  const dict = JSON.parse(data);

  for (let key in dict) {
    let h = document.createElement("h3");
    h.className = "poem";
    h.textContent = key;
    document.querySelector(".poems").appendChild(h);

    let t = dict[key].replaceAll("\n", "<br />");
    let p = document.createElement("p");
    p.className = "poem";
    p.innerHTML = t;
    document.querySelector(".poems").appendChild(p);
  }
}

fetchPoems();
