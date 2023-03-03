//Mettre le code JavaScript lié à la page photographer.html
const params = new URLSearchParams(document.location.search);
const photographerId = params.get("id");
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

async function displayData(onePhotographer) {
  console.log(onePhotographer);
  const photographerSection = document.querySelector(".photograph-header");
  const photographerModel = photographerFactory(onePhotographer);
  const contactCardDOM = photographerModel.getContactCardDOM();
  photographerSection.appendChild(contactCardDOM);
}

async function init() {
  // Récupère les datas des photographes
  const onePhotographer = await getPhotographer(photographerId);
  displayData(onePhotographer);
}

init();
