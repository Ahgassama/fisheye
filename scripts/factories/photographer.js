function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const a = document.createElement("a");

    a.href = `photographer.html?id=${id}`;
    console.log(a);
    h2.textContent = name;
    h3.textContent = city + "," + " " + country;
    p.textContent = tagline;
    span.textContent = price + "€/jour";
    article.appendChild(a);
    a.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(span);

    return article;
  }
  function getContactCardDOM() {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    const a = document.createElement("a");

    a.href = `photographer.html?id=${id}`;
    console.log(a);
    h2.textContent = name;
    h3.textContent = city + "," + " " + country;
    p.textContent = tagline;
    article.appendChild(a);
    a.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);

    return article;
  }
  return { name, picture, getUserCardDOM, getContactCardDOM };
}
