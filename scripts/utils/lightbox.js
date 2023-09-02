async function displayLightBox() {
  const images = document.querySelectorAll(".medias");
  const lightbox = document.querySelector(".lightbox-content");
  lightbox.style.display = "block";
  console.log(lightbox);

  images.forEach((element) => {
    element.addEventListener("click", (event) => {
      openLightbox(event);
    });
  });

  let medias = document.getElementById("medias");
  medias.addEventListener("click", displayLightBox);

  async function openLightbox(event) {
    const params = new URLSearchParams(document.location.search);
    const photographerId = params.get("id");

    const mainData = await fetch(`../data/photographers.json`).then(
      (response) => response.json()
    );

    console.log(mainData);
    const mediatab = mainData.media;
    console.log(mediatab);
    const medias = mediatab.filter(
      (medias) => medias.photographerId == photographerId
    );
    console.log(medias);
    console.log(images);
    const index = Array.from(images).indexOf(event.target);
    console.log(index);
    const lightBoxModel = lightBoxFactory();
    lightBoxModel.lightBoxDOM(medias, index);
  }
}
displayLightBox();
