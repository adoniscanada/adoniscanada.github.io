async function fetchPoems() {
  const URL =
    "https://raw.githubusercontent.com/adoniscanada/anapest-news/refs/heads/main/poems.json";
  const response = await fetch(URL);
  const data = await response.text();
  const dict = JSON.parse(data);

  for (let key in dict) {
    // let container = document.createElement("div");
    // container.className = "poem-title-container";
    // document.querySelector(".poems").appendChild(container);

    let h = document.createElement("h4");
    h.className = "poem";
    h.textContent = key;
    document.querySelector(".poems").appendChild(h);

    let t = dict[key].replaceAll(
      "<br />",
      "<br /> <span class='unindent'></span>"
    );
    let p = document.createElement("p");
    p.className = "poem";
    p.innerHTML = t;
    document.querySelector(".poems").appendChild(p);
  }
  document.querySelector("#poem-count").textContent =
    String(Object.keys(dict).length) + " Minute Read";
}

fetchPoems();
