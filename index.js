/*addclass to import css style from style.css.
removeClass to remove the class from the line of code
to add multiple class in the same element, just add (SPACE) between the class
use hasClass to indicate boolean value of the element either true or false
*/


// to add class
$("h1").addClass("big-title margin-50");


// to change text of the element
$("button").text("Dont Click Me");

// replacement for innerHTML 
$("button").html("<em>CLICK ME</em>")

// to change attribute for anchor tag or img source
$("a").attr("href", " https://www.yahoo.com");



// // to add eventListner
$("h1").click(function() {
    $("h1").css("color", "purple");

});

// //to apply eventlister to all same element without using for loops
$("button").click(function(){
    $("h1").css("color", "purple");

});

// //to apply keydown event in the whole document.
$(document).keydown(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");

});


// to add new element element inside our html code

//before
$("h1").before("<button>New</button>");

//after
$("h1").after("<button>New</button>");

//prepend infront of the selected element
$("h1").prepend("<button>New</button>");

// append, at the end of the selected element
$("h1").append("<button>New</button>");