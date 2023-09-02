//Mettre le code JavaScript lié à la page photographer.html
const params = new URLSearchParams(document.location.search);
const photographerId = params.get("id");
export { photographerId };
console.log(photographerId);

async function getPhotographer(photographerId) {
  const mainData = await fetch(`../data/photographers.json`).then((response) =>
    response.json()
  );
  console.log(mainData);
  const photographertab = mainData.photographers;

  console.log(photographertab);
  const onePhotographer = photographertab.find(
    (onePhotographer) => onePhotographer.id == photographerId
  );

  console.log(onePhotographer);

  return onePhotographer;
}
async function getMedia(photographerId) {
  const mainData = await fetch(`../data/photographers.json`).then((response) =>
    response.json()
  );
  const mediatab = mainData.media;
  console.log(mediatab);
  const medias = mediatab.filter(
    (medias) => medias.photographerId == photographerId
  );
  const photographertab = mainData.photographers;
  const onePhotographer = photographertab.find(
    (onePhotographer) => onePhotographer.id == photographerId
  );
  console.log(medias);
  const ticketSection = document.getElementById("main");
  const photographerModel = photographerFactory(onePhotographer);
  const ticketCardDOM = photographerModel.getTicketCardDOM(medias);
  ticketSection.appendChild(ticketCardDOM);

  return medias;
}

async function displayData(onePhotographer) {
  console.log(onePhotographer);
  const photographerSection = document.querySelector(".photograph-header");
  const photographerModel = photographerFactory(onePhotographer);
  const contactCardDOM = photographerModel.getContactCardDOM();
  photographerSection.appendChild(contactCardDOM);
}

async function displayTicket(onePhotographer) {
  console.log(onePhotographer);
  const ticketSection = document.getElementById("main");
  const photographerModel = photographerFactory(onePhotographer);
  const ticketCardDOM = photographerModel.getTicketCardDOM(medias);
  ticketSection.appendChild(ticketCardDOM);
}
async function displayContactName(onePhotographer) {
  const contactName = document.querySelector(".header-modal");
  const photographerModel = photographerFactory(onePhotographer);
  const nameCardDOM = photographerModel.getContactNameDOM();
  contactName.appendChild(nameCardDOM);
  console.log(nameCardDOM);
}

async function init() {
  // Récupère les datas des photographes
  const onePhotographer = await getPhotographer(photographerId);

  displayData(onePhotographer);
  displayTicket(onePhotographer);
  displayContactName(onePhotographer);
  const medias = await getMedia(photographerId);
  //totalLikes(medias);
}

init();
/*async function totalLikes(medias) {
  console.log(medias);
  let totalikes = [];
  for (let t = 0; t < medias.length; t++) {
    console.log(medias.length);
    let morelike = medias[t].likes;
    totalikes.push(morelike);
    console.log(totalikes);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const mainTotalLikes = totalikes.reduce(reducer, 0);
  console.log(mainTotalLikes);
} */
