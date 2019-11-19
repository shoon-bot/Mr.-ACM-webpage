var other = "assets/image/kelu.webp";
var main = "assets/image/KelvinAwards.jpg";

function changeImage() {
    if (document.getElementById("profile").src == other) {
        document.getElementById("profile").src = main;
    } else {
        document.getElementById("profile").src = other;
    }
}