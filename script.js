import './style.scss';
import $ from 'jquery';
// import axios from 'axios';


$(".aquarium").html("<img src='coral.png' alt='du corail rose' class='coral'/>");


var fish = $("<img src='fish.png' alt='du corail rose'/>");

var premier = fish.clone().css({
    "width": "50px",
    "margin-left": "40%",
    "position": "absolute",
    "margin-top": "10%",
});

var deuxieme = fish.clone().css({
    "width": "  100px",
    "margin-top": "15%",
    "position": "absolute"
});

var jellyfish = $("<img src='jellyfish.png' alt='du corail rose'/>");

var troisieme = jellyfish.clone().css({
    "width": "  250px",
    "margin-left": "5%",
    "position": "absolute"
});

var seahorse = $("<img src='seahorse.png' alt='du corail rose'/>");
var quatrieme = seahorse.clone().css({
    "width": "  5%",
    "margin-left": "40%",
    "margin-top": "35%",
    "position": "absolute"
});


var coral = $("<img src='coral.png' alt='du corail rose'/>");
var cinquieme = coral.clone().css({
    "width": "10%",
    "margin-left": "50%",
    "margin-top": "35%",
    "position": "absolute"
});

var bjellyfish = $("<img src='blue-jellyfish.png' alt='du corail rose'/>");
var sixieme = bjellyfish.clone().css({
    "width": "10%",
    "margin-left": "50%",
    "margin-top": "20%",
    "position": "absolute"
});

var septieme = fish.clone().css({
    "width": "8%",
    "margin-left": "25%",
    "margin-top": "20%",
    "position": "absolute"
});

var yellow = $("<img src='yellow.png' alt='du corail rose'/>");
var huitieme = yellow.clone().css({
    "width": "5%",
    "margin-left": "18%",
    "margin-top": "30%",
    "position": "absolute"
});

var neuvieme = yellow.clone().css({
    "width": "5%",
    "margin-left": "25%",
    "margin-top": "2%",
    "position": "absolute"
});

$('.aquarium').append(premier, deuxieme, troisieme, quatrieme, cinquieme, sixieme, septieme, huitieme, neuvieme);


setInterval(function(){
    var avtGauche = parseInt(premier.css('left'), 10);
    premier.css('left', `${avtGauche - 1}px`);
}, 150);

setInterval(function(){
    var avtGauche = parseInt(deuxieme.css('left'), 10);
    deuxieme.css('left', `${avtGauche - 1}px`);
}, 150);

setInterval(function(){
    var avtGauche = parseInt(sixieme.css('top'), 10);
    sixieme.css('top', `${avtGauche - 1}px`);
}, 150);

setInterval(function(){
    var avtGauche = parseInt(septieme.css('left'), 10);
    septieme.css('left', `${avtGauche - 1}px`);
}, 50);

setInterval(function(){
    var avtGauche = parseInt(quatrieme.css('left'), 10);
    quatrieme.css('left', `${avtGauche - 1}px`);
}, 50);

setInterval(function(){
    var avtGauche = parseInt(troisieme.css('left'), 10, ('top'));
    troisieme.css('left', `${avtGauche - 1}px`);
}, 150);

setInterval(function(){
    var avtGauche = parseInt(huitieme.css('left'), 10, ('top'));
    huitieme.css('left', `${avtGauche + 1}px`);
}, 200);

setInterval(function(){
    var avtGauche = parseInt(neuvieme.css('left'), 10, ('top'));
    neuvieme.css('left', `${avtGauche + 1}px`);
}, 250);