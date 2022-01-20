console.log(`1.Вёрстка валидная +10
2.Вёрстка семантическая +20
  В коде странице присутствуют:
    <header>, <main>, <footer> +2
    шесть элементов <section> +2
    только один заголовок <h1> +2
    пять заголовков <h2> +2
    один элемент <nav> +2
    два списка ul > li > a +2
    десять кнопок <button> +2
    два инпута: <input type="email"> и <input type="tel"> +2
    один элемент <textarea> +2
    три атрибута placeholder +2
3.Вёрстка соответствует макету +48 (ПРИ ИСПОЛЬЗОВАНИИ DEVICE TOOLBAR БРАУЗЕРА GOOGLE CHROME В РЕЖИМЕ RESPONSIVE, ПРИ УСТАНОВЛЕННОМ РАЗРЕШЕНИИ ЭКРАНА 1440px, И ВЫСТАВЛЕНИИ В РАСШИРЕНИИ PerfectPixel МАСШТАБА 1, И ВЫРАВНИВАНИИ ПО ОСЯМ X=0, Y=0, СУЩЕСТВЕННЫХ РАСХОЖДЕНИЙ С МАКЕТОМ НЕ ВИЖУ)
    блок <header> +6
    секция hero +6
    секция skills +6
    секция portfolio +6
    секция video +6
    секция price +6
    секция contacts +6
    блок <footer> +6
4.Требования к css + 12
    для построения сетки используются флексы или гриды +2
    при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
    фоновый цвет тянется на всю ширину страницы +2
    иконки добавлены в формате .svg +2
    изображения добавлены в формате .jpg +2
    есть favicon +2
5.Интерактивность, реализуемая через css +20
    плавная прокрутка по якорям +5
    ссылки в футере ведут на гитхаб автора проекта и на страницу курса +5
    интерактивность включает в себя не только изменение внешнего вида курсора, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта +5
    обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5
    
    Итого: 110`);

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
