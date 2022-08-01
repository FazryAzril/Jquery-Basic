
// only can animate that have numeric value
$("button").on("click", function(){

    $("h1").slideUp().slideDown().animate({opacity: 0.5})
});


$("button").on("click", function(){

    $("h1").animate({opacity: 0.5});

});


// to enable toggle animation (hide, unhide)
$("button").on("click", function(){

    $("h1").toggle();

});

// to hide element
$("button").on("click", function(){

    $("h1").toggle();

});


// TO FADE ANIMATION
$("button").on("click", function(){

    $("h1").fadeOut();

});

$("button").on("click", function(){

    $("h1").fadeIn();

});

$("button").on("click", function(){

    $("h1").fadeToggle();

});


// TO SLIDE UP ANIMATION
$("button").on("click", function(){

    $("h1").slideUp();

});

$("button").on("click", function(){

    $("h1").slidedown();

});

$("button").on("click", function(){

    $("h1").slideToggle();

});

