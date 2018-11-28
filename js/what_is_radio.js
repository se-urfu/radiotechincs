function adaptMinHeightRadioWhat() {
    var screenWidth = window.innerWidth;
    var minHeight = 850 + "px";
    if (screenWidth > 1000)
        minHeight = 400 + "px";
    document.getElementById("what_is_radio").style.minHeight = minHeight;
}
/*FOR ADAPTIVITY (change min-height) TODO ADD FOR EVERY SECTION*/
$(document).ready(function () {
    adaptMinHeightRadioWhat();
});

$(window).resize(function () {
    adaptMinHeightRadioWhat();
}); 
