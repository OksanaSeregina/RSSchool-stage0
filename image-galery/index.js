const APP_ID = "2V463P6fKEkq0yXfXuR5xVq3dde16ogwTz_Pj6KH3Ek";
const IMAGES_DATA = "https://api.unsplash.com/search/photos";

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
  let currentData = document.querySelector("#input").value;
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
  if (
    e.target.classList.contains("icon-search") &&
    document.querySelector("#input").value !== ""
  ) {
    document.querySelector(".icon-search").classList.add("hiden");
    document.querySelector(".icon-close").classList.remove("hiden");
  } else {
    document.querySelector("#input").value = "";
    document.querySelector("#input").focus();
    document.querySelector(".icon-search").classList.remove("hiden");
    document.querySelector(".icon-close").classList.add("hiden");
  }
}

document.addEventListener("DOMContentLoaded", renderImagesApp);
document
  .querySelector(".icon-search")
  .addEventListener("click", renderImagesApp);
document.querySelector(".right-heder").addEventListener("click", changeElem);
