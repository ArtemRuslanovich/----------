$(document).ready(function() {
    $("#menu-btn").click(function(event) {
        event.preventDefault();
        $("#menu-photo").css("display", "flex");
        $("#overlay").css("display", "block");
    });

    $("#overlay").click(function() {
        $("#menu-photo").css("display", "none");
        $(this).css("display", "none");
    });

    $("#menu-photo").click(function() {
        $(this).css("display", "none");
        $("#overlay").css("display", "none");
    });
});
