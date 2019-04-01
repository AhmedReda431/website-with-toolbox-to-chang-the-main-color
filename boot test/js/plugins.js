$(document).ready(function(){

$('.carousel').carousel({
interval:8000
  });
    
    $("html").niceScroll();
    $(".do-nicescrol").niceScroll({
      cursorcolor:"aquamarine",
      cursorwidth:"24px",
      background:"rgba(20,20,20,0.3)",
      cursorborder:"1px solid aquamarine",
      cursorborderradius:0
    });  
    
    // show color option div when click on the gear
    $(".gear-check").click(function(){
            $(".color-option").fadeToggle();
        });
    // chnge theme color in click
    var colorLi=$(".color-option ul li");
    
    colorLi
        .eq(0).css("backgroundColor","#E41B17").end()
        .eq(1).css("backgroundColor","#15d9ea").end()
        .eq(2).css("backgroundColor","#d9cf58").end()
        .eq(3).css("backgroundColor","#1b7e09");
    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
    var scrollButton = $("#scroll-top");
    $(window).scroll(function()
    {
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
    
    scrollButton.click(function()
    {
        $("html,body").animate({scrollTop : 0},600);
    });
    
});
//loading screen

$(window).load(function()
{
    $("body").css("overflow","auto");
    $(".loading-overlay").fadeOut(5000); 
});