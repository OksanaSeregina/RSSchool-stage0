console.log(`1.Вёрстка соответствует макету. Ширина экрана 768px(ПРИ ИСПОЛЬЗОВАНИИ DEVICE TOOLBAR БРАУЗЕРА GOOGLE CHROME В РЕЖИМЕ RESPONSIVE, ПРИ УСТАНОВЛЕННОМ РАЗРЕШЕНИИ ЭКРАНА 768px, В БРАУЗЕРЕ И ОПЕРАЦИОННОЙ СИСТЕМЕ - МАСШТАБ 100%, И ВЫСТАВЛЕНИИ В РАСШИРЕНИИ PerfectPixel МАСШТАБА 1, И ВЫРАВНИВАНИИ ПО ОСЯМ X=0, Y=0, СУЩЕСТВЕННЫХ РАСХОЖДЕНИЙ С МАКЕТОМ НЕ ВИЖУ) +48
- блок <header> +6
- секция hero +6
- секция skills +6
- секция portfolio +6
- секция video +6
- секция price +6
- секция contacts +6
- блок <footer> +6
2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
- нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5
- нет полосы прокрутки при ширине страницы от 768рх до 480рх +5
- нет полосы прокрутки при ширине страницы от 480рх до 320рх +5
3.На ширине экрана 768рх и меньше реализовано адаптивное меню +22
- при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2
- при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4
- высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4
- при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4
- бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2
- ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2
- при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4
    
    Итого: 85`);

const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navList = document.getElementsByClassName("nav-list")[1];

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

function closeMenu(event) {
  if (event.target.classList.contains("nav-link")) {
    navbar.classList.remove("change");
  }
}
navList.addEventListener("click", closeMenu);

window.addEventListener("scroll", function () {
  let st = document.documentElement.scrollTop;
  if (st > 0 && !menuIcon.parentElement.classList.contains("change")) {
    menuIcon.classList.add("hide");
  } else {
    menuIcon.classList.remove("hide");
  }
});

window.addEventListener("click", (e) => {
  let st = document.documentElement.scrollTop;
  if (
    e.target.closest(".hamburger-menu") &&
    st > 0 &&
    !navbar.classList.contains("change")
  ) {
    menuIcon.classList.add("hide");
  }
});

//Changing images in the Portfolio section
const groupBtn = document.querySelector(".group-btn");
const itemsPortfolio = document.querySelectorAll(".item-portfolio");
const btnPortfolioTransp = document.querySelectorAll(".btn-portfolio-transp");

function changeClassActive(event, cl, allElem) {
  allElem.forEach((elem) => {
    elem.classList.remove(cl);
  });

  event.target.classList.add(cl);
}

function changeImage(event) {
  if (event.target.classList.contains("btn-portfolio-transp")) {
    let season = event.target.dataset.season;

    itemsPortfolio.forEach(
      (img, index) =>
        (img.innerHTML = `<img src="./assets/img/${season}/${
          index + 1
        }.jpg" alt="foto" /> `)
    );
    changeClassActive(event, "active", btnPortfolioTransp);
  }
}
groupBtn.addEventListener("click", changeImage);

//Image Caching
const seasons = ["winter", "spring", "summer", "autumn"];

function preloadImages() {
  seasons.forEach((elem) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${elem}/${i}.jpg`;
    }
  });
}
preloadImages();

//Page translation
const langElements = document.querySelectorAll("[data-lang]");

function getTranslate(lang) {
  const dataElem = document.querySelectorAll("[data-i18]");
  dataElem.forEach((elem) => {
    elem.textContent = i18Obj[lang][elem.dataset.i18];

    if (elem.placeholder) {
      elem.placeholder = i18Obj[lang][elem.dataset.i18];
      elem.textContent = "";
    }
  });
}

document.querySelector(".language").addEventListener("click", (e) => {
  let lang = e.target.dataset.lang;
  getTranslate(lang);
  localStorage.setItem("langStorage", lang);
  changeClassActive(e, "active-lang", langElements);
});

//Switching themes
const classesSwitching = [
  document.querySelector(".wrapper"),
  document.querySelector(".header"),
  document.querySelector(".hero"),
  document.querySelector(".skills"),
  document.querySelector(".portfolio"),
  document.querySelector(".video"),
  document.querySelector(".price"),
  document.querySelector(".contacts"),
  document.querySelector(".footer"),
];

let themeStorage = "dark";

function changeSwitcher() {
  classesSwitching.forEach((elem) => {
    elem.classList.toggle(`${elem.className.split(" ", 1)[0]}-light-theme`);
  });
}
document.querySelector(".switcher").addEventListener("click", changeSwitcher);
/*--------------------- local storage --------------------- */

/* let langStorage = "en";
let themeStorage = "dark";

function setLocalStorage() {
  localStorage.setItem("langStorage", langStorage);
  //localStorage.setItem("themeStorage", themeStorage);
}
window.addEventListener("beforeunload", setLocalStorage); */

function getLocalStorage() {
  if (localStorage.getItem("langStorage")) {
    const langStorage = localStorage.getItem("langStorage");
    getTranslate(langStorage);
  } /* else if (localStorage.getItem("themeStorage")) {
    const themeStorage = localStorage.getItem("themeStorage");
    changeSwitcher(themeStorage);
  } */
}
window.addEventListener("load", getLocalStorage);
