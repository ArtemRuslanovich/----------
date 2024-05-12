var header = document.getElementById("header-section");

// Получаем позицию элемента header относительно верха документа
var sticky = header.offsetTop;

// Функция, которая будет вызываться при прокрутке страницы
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

// Добавляем обработчик прокрутки страницы
window.onscroll = function() {
    stickyHeader();
};