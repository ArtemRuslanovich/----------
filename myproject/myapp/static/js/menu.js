document.getElementById("menu-btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("menu-photo").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("menu-photo").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});