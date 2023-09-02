function updatelikeFactory(medias, data) {
  let { photographerId, title, date, likes, price, image, video, id } = medias;
  const { name, id, city, country, tagline, price, portrait } = data;
  const likespan = document.querySelector(".like");
  console.log(likespan);
  let clic = false;

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
  likespan.addEventListener("click", () => {
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
}
