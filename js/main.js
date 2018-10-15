var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 700; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
});

$(document).ready(function(){

var $zik = $('#audio')[0];

var $play = $('.play') ;
var $pause = $('.pause') ;
var $stop = $('.stop') ;

$play.click( jouer );
$pause.click( attente );
$stop.click( arret );

function jouer(){
  $zik.play();
}

function attente(){
  $zik.pause();
}

function arret(){
  $zik.pause();
  $zik.currentTime = 0;
}

});
