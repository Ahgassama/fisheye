import { photographerId } from "../pages/photographer.js";
console.log(photographerId);

async function getMedia(photographerId) {
  const mainData = await fetch(`../data/photographers.json`).then((response) =>
    response.json()
  );
  const mediatab = mainData.media;
  console.log(mediatab);
  const medias = mediatab.filter(
    (medias) => medias.photographerId == photographerId
  );
  console.log(medias);

  return medias;
}

async function displayData(medias) {
  console.log(medias);

  /*medias.sort((a, b) => (a.likes < b.likes ? 1 : -1));
  console.log(medias);*/
  /*medias.sort((a, b) => (a.title > b.title ? 1 : -1));
  console.log(medias);*/
  medias.sort((a, b) => (a.date < b.date ? 1 : -1));
  console.log(medias);
  const mediaSection = document.getElementById("medias");

  console.log(mediaSection);
  medias.forEach((medias) => {
    const mediaModel = mediaFactory(medias);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}

async function sortData(medias) {
  const main = document.getElementById("main");
  console.log(main);
  const mediaModel = mediaFactory(medias);
  const menuCardDOM = mediaModel.sortMediaCardDOM();
  main.appendChild(menuCardDOM);
}

const footer = document.querySelector("footer");
console.log(footer);

async function init() {
  // Récupère les datas des photographes

  const medias = await getMedia(photographerId);
  sortData(medias);
  displayData(medias);
}

init();
/*
  const index = [medias];
  console.log(index);
  for (let i = 0; i < index.length; i++) {
    console.log(index[i]);
    const mediaSection = document.getElementById("medias");
    const mediaModel = mediaFactory(medias);
    const lightboxCardDOM = mediaModel.lightBoxDOM();
    mediaSection.appendChild(lightboxCardDOM);

    const image = document.querySelector(".media-img");
    console.log(image);
    const snap = document.querySelector(".media-video");
    const lightbox = document.querySelector(".lightbox");
    const closeButton = document.querySelector(".close-button");
    const background = document.querySelector(".lightbox-background");
    image.addEventListener("click", () => {
      lightbox.style.display = "block";
    });
    background.addEventListener("click", () => {
      // lightbox.removeChild(snap1);
      lightbox.style.display = "none";
    });
    closeButton.addEventListener("click", () => {
      //lightbox.removeChild(snap1);
      lightbox.style.display = "none";
    });
  }*/
/*const spanlike = document.querySelectorAll(".like");
    console.log(spanlike);
    let like = medias.likes;
    console.log(like);
    const totalLikes = document.querySelector(".totalLikes");
    console.log(totalLikes);
    const footer = document.querySelector("footer");
    console.log(footer);
    const ticket = document.querySelector(".ticket");
    console.log(ticket);
    let clic = false;
    spanlike.forEach((spanlike) => {
      spanlike.addEventListener("click", () => {
        if (clic) {
          clic = false;
          updateTotal--;
          console.log(updateTotal);
        } else {
          clic = true;
          updateTotal++;
          console.log(updateTotal);
        }
      });
    });*/
/*let totaLikes = [];
  let totalDates = [];
  let totalTitles = [];
  for (let t = 0; t < medias.length; t++) {
    let onelike = medias[t].likes;
    let onedate = medias[t].date;
    let oneTitle = medias[t].title;
    totaLikes.push(onelike);
    totalDates.push(onedate);
    totalTitles.push(oneTitle);
  }
  totaLikes.sort((a, b) => b - a);
  totalDates.sort((a, b) => a - b);
  totalTitles.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(totaLikes);
  console.log(totalDates);
  console.log(totalTitles);

  let maxLike = Math.max(...totaLikes);
  console.log(maxLike);
  let minLike = Math.min(...totaLikes);
  console.log(minLike);*/
