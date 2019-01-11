$(document).ready(function(){   
    var screenHeight = screen.height + "px";  
    console.log(screenHeight);
    if(screen.height>900)
        screenHeight="900px";
    document.getElementById ("intro").style.minHeight = screenHeight;
    //intro page must be fullscreen!
});