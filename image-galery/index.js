const APP_ID = "2V463P6fKEkq0yXfXuR5xVq3dde16ogwTz_Pj6KH3Ek";
const IMAGES_DATA = "https://api.unsplash.com/search/photos";

//получение данных
const getResourse = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`!!!! ${res.status}`);
  }

  return res.json();
};

//запрос на сервер
const getDataInfo = async (search) => {
  const res = await getResourse(
    `${IMAGES_DATA}?query=${search}&per_page=30&orientation=landscape&client_id=${APP_ID}`
  );
  return res;
};

//изменение HTML
const renderImagesApp = async () => {
  let currentData = document.querySelector("#input").value;
  if (currentData === "" && localStorage.getItem("inputData") === null) {
    currentData = "maldives";
  } else if (currentData === "") {
    currentData = localStorage.getItem("inputData");
  }
  const data = await getDataInfo(currentData);
  let imgContent = document.querySelector(".img-content");

  imgContent.innerHTML = "";

  for (let i = 0; i < data.results.length; i++) {
    imgContent.innerHTML += `
    <div class="item">
      <img src=${data.results[i].urls.regular} alt="foto" />
    </div>
    `;
  }

  localStorage.setItem("inputData", currentData);
};

document.addEventListener("DOMContentLoaded", renderImagesApp);
document
  .querySelector(".icon-search")
  .addEventListener("click", renderImagesApp);
