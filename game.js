var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColour;
var startGame = true;
var level = 0;
var curentlevel = 0;


$(document).keypress( "a" , function(){
  if (startGame== true){
    nextSequence();
    startGame = false;
    $("h1").text("Level = " + level);
  }

});

function nextSequence() {
   var randomNumber = Math.floor(Math.random() * 4);
   randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   level++;
   $("h1").text("Level = " + level);
  $(`#${randomChosenColour}`).fadeOut(250).fadeIn(250);
   playSong(randomChosenColour);

}


function checkAnswer(currentLevel){
if (userClickedPattern[curentlevel]==gamePattern[curentlevel]){
  console.log("good");
  curentlevel++;
        if(userClickedPattern.length==gamePattern.length){
          curentlevel=0;
          userClickedPattern = [];
          setTimeout(function () {
              nextSequence();
          }, 1000);
        }

}else{
  playSong("wrong");
  $("body").addClass('game-over');
  setTimeout(function () {
      $("body").removeClass('game-over');
  }, 200);
$("h1").text("Game Over, Press Any Key to Restart");
startOver();
  console.log("wrong");
}


}

function startOver(){
   gamePattern = [];
   userClickedPattern = [];
   randomChosenColour;
   startGame = true;
   level = 0;
   curentlevel = 0;

}


$(".btn").click(function() {
     var userChosenColour = $(this).attr("id");
     userClickedPattern.push(userChosenColour);
     animatePress(userChosenColour);
     playSong(userChosenColour);
     checkAnswer(curentlevel);

});


function playSong(name) {
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
 }

function animatePress(curentColour) {
   $(`#${curentColour}`).addClass('pressed');
   setTimeout(function () {
       $(`#${curentColour}`).removeClass('pressed');
   }, 100);
}
