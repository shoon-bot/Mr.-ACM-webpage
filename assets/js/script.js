var other = "assets/image/kelu.webp";
var main = "assets/image/KelvinAwards.jpg";
var switched = false
function changeImage() {
    if (switched) {
        document.getElementById("profile").src = main;
    } else {
        document.getElementById("profile").src = other;
    }
    switched = !switched;
}