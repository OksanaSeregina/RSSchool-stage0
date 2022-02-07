const APP_ID = "2V463P6fKEkq0yXfXuR5xVq3dde16ogwTz_Pj6KH3Ek";
const IMAGES_DATA = "https://api.unsplash.com/search/photos";

const iconSearch = document.querySelector(".icon-search");
const iconClose = document.querySelector(".icon-close");
const inputData = document.querySelector("#input");

//получение данных
const getResourse = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`${res.status} - Too many request`);
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
const renderImagesApp = async (e) => {
  e.preventDefalt;
  let currentData = inputData.value;
  if (currentData === "" && localStorage.getItem("inputData") === null) {
    currentData = "maldives";
  } else if (currentData === "") {
    currentData = localStorage.getItem("inputData");
  }
  const data = await getDataInfo(currentData);
  if (data.results.length === 0) {
    currentData = "maldives";
  }
  let imgContent = document.querySelector(".img-content");

  console.log(data.results.length);

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

function changeElem(e) {
  if (e.code === "Enter" && inputData.value !== "") {
    iconSearch.classList.add("hiden");
    iconClose.classList.remove("hiden");
  }
  if (e.target.classList.contains("icon-search") && inputData.value !== "") {
    iconSearch.classList.add("hiden");
    iconClose.classList.remove("hiden");
  } else {
    inputData.value = "";
    inputData.focus();
    iconSearch.classList.remove("hiden");
    iconClose.classList.add("hiden");
  }
}

document.addEventListener("DOMContentLoaded", renderImagesApp);
iconSearch.addEventListener("click", renderImagesApp);
document.querySelector(".right-heder").addEventListener("click", changeElem);

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter" && inputData.value !== "") {
    renderImagesApp(e);
    iconSearch.classList.add("hiden");
    iconClose.classList.remove("hiden");
  }
});
