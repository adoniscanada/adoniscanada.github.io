async function fetchPoems() {
  const URL =
    "https://raw.githubusercontent.com/adoniscanada/anapest-news/refs/heads/main/current_poems.json";
  const response = await fetch(URL);
  const data = await response.text();
  const arr = JSON.parse(data);
  let l = arr.length;

  for (let i = 0; i < l; i++) {
    let h = document.createElement("h1");
    h.className = "poem";
    h.textContent = String(i + 1);
    document.body.appendChild(h);

    let t = arr[i].replaceAll("\n", "<br />");
    let p = document.createElement("p");
    p.className = "poem";
    p.innerHTML = t;
    document.body.appendChild(p);
  }
  //   let poem = document.querySelector(".poem");
  //   poems = "";
  //   for (let i = 0; i < l; i++) {
  //     let s = arr[i].replaceAll("\n", "<br />");
  //     poems += s;
  //   }
  //   poem.innerHTML = poems;
}

fetchPoems();
