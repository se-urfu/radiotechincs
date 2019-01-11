function adaptMinHeightStats() {
    var screenWidth = window.innerWidth;
    var minHeight = 810 + "px";
    if (screenWidth > 1000)
        minHeight = 510 + "px";
    document.getElementById("statistics").style.minHeight = minHeight;
}
/*FOR ADAPTIVITY (change min-height) TODO ADD FOR EVERY SECTION*/
$(document).ready(function () {
    adaptMinHeightStats();
});

$(window).resize(function () {
    adaptMinHeightStats();
});