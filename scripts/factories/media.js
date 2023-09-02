function mediaFactory(data) {
  let { photographerId, title, date, likes, price, image, video, id } = data;
  const mediaWay = `assets/medias/${photographerId}/${image || video}`;
  const isVideo = Boolean(video);
  let clic = false;

  function getMediaCardDOM() {
    const article = document.createElement("article");

    if (isVideo) {
      const snap = document.createElement("video");
      snap.controls = true;
      snap.src = mediaWay;
      snap.setAttribute("class", "medias");
      console.log(snap);
      article.appendChild(snap);
    } else {
      const img = document.createElement("img");
      img.setAttribute("src", mediaWay);
      img.setAttribute("class", "medias");
      console.log(img);
      article.appendChild(img);
    }

    const h2 = document.createElement("h2");
    const span = document.createElement("span");
    const div = document.createElement("div");
    h2.textContent = title;
    span.textContent = likes + " ";
    span.innerHTML += `<i class="fa-sharp fa-solid fa-heart"></i>`;
    span.setAttribute("class", "like");

    span.addEventListener("click", (e) => {
      if (clic) {
        clic = false;

        likes--;
        span.textContent = likes + " ";
        span.innerHTML += `<i class="fa-sharp fa-solid fa-heart"></i>`;
        console.log(likes);
      } else {
        clic = true;

        likes++;
        span.textContent = likes + " ";
        span.innerHTML += `<i class="fa-sharp fa-solid fa-heart"></i>`;
        console.log(likes);
      }
    });

    article.appendChild(div);
    div.classList.add("picId");
    div.appendChild(h2);
    div.appendChild(span);

    return article;
  }

  return { getMediaCardDOM };
}
