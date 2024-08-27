
document.addEventListener("DOMContentLoaded", function() {
    // Ваш код здесь
    document.getElementById("menu-btn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("menu-photo").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
    });

    document.getElementById("overlay").addEventListener("click", function() {
        document.getElementById("menu-photo").style.display = "none";
        this.style.display = "none";
    });

    document.getElementById("menu-photo").addEventListener("click", function() {
        this.style.display = "none";
        document.getElementById("overlay").style.display = "none";
    });
});