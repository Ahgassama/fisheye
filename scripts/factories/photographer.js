function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  // console.log(likes);

  console.log(data);
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
  function getContactNameDOM() {
    const h2 = document.createElement("h2");
    h2.textContent = "Contactez moi" + " " + name;
    return h2;
  }
  function getTicketCardDOM(medias) {
    let { photographerId, likes } = medias;

    console.log(medias);
    let totalikes = [];
    for (let t = 0; t < medias.length; t++) {
      let morelike = medias[t].likes;
      totalikes.push(morelike);
      console.log(totalikes);
      console.log(morelike);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let mainTotalLikes = totalikes.reduce(reducer, 0);
    console.log(mainTotalLikes);

    const footer = document.createElement("footer");
    const ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    const span = document.createElement("span");
    span.setAttribute("class", "totalLikes");
    span.textContent = mainTotalLikes + " ";
    span.innerHTML += `<i class="fa-sharp fa-solid fa-heart"></i>`;
    ticket.textContent = price + "€/jour" + "   ";
    ticket.appendChild(span);
    footer.appendChild(ticket);
    const spanlike = document.querySelectorAll(".like");
    console.log(spanlike);

    spanlike.forEach((spanlike) => {
      let beforeliked = spanlike.textContent;
      console.log(beforeliked);
      spanlike.addEventListener("click", (e) => {
        let liked = spanlike.textContent;
        console.log(liked);
        let updateLike = liked - beforeliked;
        console.log(updateLike);
        if (updateLike >= 1) {
          console.log(mainTotalLikes++);
          span.textContent = mainTotalLikes + " ";
          span.innerHTML += `<i class="fa-sharp fa-solid fa-heart"></i>`;
        } else {
          console.log(mainTotalLikes--);
          span.textContent = mainTotalLikes + " ";
          span.innerHTML += `<i class="fa-sharp fa-solid fa-heart"></i>`;
        }
      });
    });

    return footer;
  }

  return {
    name,
    picture,
    getUserCardDOM,
    getContactCardDOM,
    getTicketCardDOM,
    getContactNameDOM,
  };
}
