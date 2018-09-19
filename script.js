function fixBox(){

    var $box = $("#right-container");
    var $boxElements = $(".fixed");

    if($(window).scrollTop() > 750)
    {
        $box.css({"position":"fixed", "top":"10px", "max-width":"360px", "margin-left":"10px"});
        $boxElements.css({"display":"block"});
    }
    else
    {
        $box.css({"position":"relative", "top":"auto", "max-width":"360px"});
        $boxElements.css({"display":"block"});
    }
}

$(window).scroll(fixBox);
fixBox();