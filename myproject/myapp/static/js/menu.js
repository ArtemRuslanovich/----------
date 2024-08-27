// Обработчик для кнопки "Меню"
document.getElementById("menu-btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("menu-photo").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
});

// Обработчик для затемненного фона
document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("menu-photo").style.display = "none";
    this.style.display = "none"; // Используем "this" для обращения к элементу overlay
});

// Дополнительный обработчик для закрытия при клике на изображение
document.getElementById("menu-photo").addEventListener("click", function() {
    this.style.display = "none";
    document.getElementById("overlay").style.display = "none";
});