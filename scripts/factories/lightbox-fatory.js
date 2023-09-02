function lightBoxFactory() {
  function lightBoxDOM(data, index) {
    const { photographerId, image, video, title, id } = data[index];
    console.log(photographerId);

    const mediaWay = `assets/medias/${photographerId}/${image || video}`;
    const isVideo = Boolean(video);

    const lightBoxContent = document.querySelector(".lightbox-content");
    const lightBoxContainer = document.createElement("div");
    const lightBoxBackGround = document.createElement("div");
    lightBoxContainer.setAttribute("class", "lightbox");
    lightBoxContainer.setAttribute("role", "dialog");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");
    lightBoxBackGround.setAttribute("class", "lightbox-background");

    //lightBoxContent.innerHTML = "";

    const mediaAsset = isVideo
      ? document.createElement("video")
      : document.createElement("img");
    mediaAsset.src = mediaWay;
    mediaAsset.setAttribute("id", `${id}`);
    if (isVideo) {
      mediaAsset.controls = true;
    }

    const h3 = document.createElement("h3");
    h3.textContent = title;
    console.log(h3);
    console.log(mediaAsset);
    lightBoxContent.appendChild(lightBoxContainer);
    lightBoxContainer.appendChild(lightBoxBackGround);
    lightBoxContainer.appendChild(mediaAsset);
    lightBoxContainer.appendChild(h3);

    const nextMedia = document.createElement("svg");
    const prevMedia = document.createElement("svg");
    nextMedia.innerHTML += `<i class="fa-sharp fa-solid fa-angle-right"></i>`;
    prevMedia.innerHTML += `<i class="fa-sharp fa-solid fa-angle-right"></i>`;
    const button = document.createElement("button");
    button.setAttribute("class", "close-button");
    button.innerHTML += `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    button.addEventListener("click", closeLightBox);
    lightBoxBackGround.addEventListener("click", closeLightBox);
    nextMedia.setAttribute("class", "next-arrow");
    nextMedia.addEventListener("click", Next);
    prevMedia.setAttribute("class", "prev-arrow");
    prevMedia.addEventListener("click", Before);
    lightBoxContainer.appendChild(button);
    lightBoxContainer.appendChild(nextMedia);
    lightBoxContainer.appendChild(prevMedia);
    async function closeLightBox() {
      lightBoxContent.style.display = "none";
      lightBoxContent.removeChild(lightBoxContainer);
    }
    async function Next() {
      lightBoxContent.removeChild(lightBoxContainer);
      if (index <= data.length) {
        lightBoxDOM(data, index + 1);
      }
    }
    async function Before() {
      lightBoxContent.removeChild(lightBoxContainer);
      if (index > 0) {
        lightBoxDOM(data, index - 1);
      }
    }
    return lightBoxContent;
  }

  return { lightBoxDOM };
}
/* if (isVideo) {
      const snap = document.createElement("video");
      snap.controls = true;
      snap.src = mediaWay;
      snap.setAttribute("class", "medias-video");
      snap.setAttribute("tabIndex", "0");

      console.log(snap);
      lightBoxContainer.appendChild(snap);
    } else {
      const img = document.createElement("img");
      img.setAttribute("src", mediaWay);
      //img.setAttribute("tabIndex", "0");
      img.setAttribute("class", "media-img");
      img.setAttribute("id", `${id}`);
      console.log(img);
     
      console.log(h3);
      lightBoxContainer.appendChild(h3);
      //div.removeChild(img);
      //div.removeChild(h3);
    }*/
