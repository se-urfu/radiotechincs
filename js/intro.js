$(document).ready(function(){   
    var screenHeight = screen.height + "px";  
    console.log(screenHeight);
    if(screen.height>1050)
        screenHeight="1050px";
    document.getElementById ("intro").style.minHeight = screenHeight;
    //intro page must be fullscreen!
});

