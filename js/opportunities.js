 
function adaptMinHeightOpportunities() {
    var screenWidth = window.innerWidth;
    var minHeight = 810 + "px";
    if (screenWidth > 1000)
        minHeight = 510 + "px";
    document.getElementById("opportunities").style.minHeight = minHeight;
}
/*FOR ADAPTIVITY (change min-height) TODO ADD FOR EVERY SECTION*/
$(document).ready(function () {
    adaptMinHeightOpportunities();
});

$(window).resize(function () {
    adaptMinHeightOpportunities();
});
