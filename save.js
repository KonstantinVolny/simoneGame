// Variabl List
var level=4 ;
var tracNextLevelArray = [];
var ansverArray = [];
var count = -1;
var misakeNumber = 0;
var gameIsOn = 1;
var numbercOfLeftButtons = tracNextLevelArray.length;

//funcion List

//enter in Game

function main (){
// refreshAllSkrioInfo();
  if (gameIsOn == 1) {

    gameIsOn = 0;

    tracGenerator();
    showTrac();
    goLevel();

  } else {
    console.log("отмена повторного запуска");
  }

}


$("button").click(main);

// trackGnenerator

function tracGenerator() {
  tracNextLevelArray=[];
  for (var i = 0; i < level; i++) {

    var randomNumber1_4 = Math.floor((Math.random() * 4) + 1);
    tracNextLevelArray.push(randomNumber1_4);

  }
  console.log(tracNextLevelArray);
  // console.log( "длинна" + tracNextLevelArray.length);
  // console.log("level " + level);
}

//function sleep

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// function pressBTN

function pressButI(qq) {
  setTimeout(function() {
    $(`.button_${qq}`).toggleClass("pushButton");
  }, 300);

  $(`.button_${qq}`).toggleClass("pushButton");
}

//shouTrac

async function showTrac() {

  for (var i = 0; i < tracNextLevelArray.length; i++) {

    if (tracNextLevelArray[i] == 1) {

      pressButI(tracNextLevelArray[i]);

      await sleep(1000);


    } else if (tracNextLevelArray[i] == 2) {
      pressButI(tracNextLevelArray[i]);

      await sleep(1000);



    } else if (tracNextLevelArray[i] == 3) {
      pressButI(tracNextLevelArray[i]);

      await sleep(1000);
      // alert("это 3");

    } else if (tracNextLevelArray[i] == 4) {
      pressButI(tracNextLevelArray[i]);

      await sleep(1000);

    }

  }

}



async function compare (number1,number2) {

  if (number1 == number2) {
    numbercOfLeftButtons = tracNextLevelArray.length - ansverArray.length ;
    refreshAllSkrioInfo();
  console.log( 'правильно' );
} else {
  // alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
  count =  count - 1;
  ansverArray.pop();
  misakeNumber++;
  refreshAllSkrioInfo();
  $("body").addClass("errorClass");
  // console.log("ошибка");
   await sleep(200);
  $("body").removeClass("errorClass");
}
}


async function chekEnd (){
 if ((count +1) == tracNextLevelArray.length){
   level++;
   // alert("Уровень пройден");

   gameIsOn = 1;
   count = -1;
   // tracNextLevelArray=[];
   ansverArray = [];
   await sleep(500);

   $("body").addClass("win");
   await sleep(500);
   $("body").removeClass("win");

   clean();
   await sleep(500);
   alert("ready to next level?")
   await sleep(1000);
   tracGenerator();
   showTrac();
   // goLevel();


   numbercOfLeftButtons = tracNextLevelArray.length - ansverArray.length ;
   refreshAllSkrioInfo();
 }else{
   // var numbercOfLeftButtons = (numbercOfLeftButtons -1) - count ;
   console.log("до конца уровня осталось " + numbercOfLeftButtons +  " элементов");
   refreshAllSkrioInfo();
 }

  refreshAllSkrioInfo();
}







function goLevel(){

  $("button").click(function(){
      var numberOfButten = $(event.target).text()
      ansverArray.push(numberOfButten);
      count =  count + 1;
       console.log("клик номер " + count);
       console.log("номер кнопки которая заходит в М.ответа " + numberOfButten);
       console.log("игрок выбрал кнопку номер (последний из массива ответа)" +  ansverArray[count]);
       console.log("игрок должен был  выбрать кнопку номер" + tracNextLevelArray[count]);
       console.log("ansverArray " + ansverArray  );
       console.log("tracNextLevelArray " + tracNextLevelArray);
       console.log("сравниваем значения " + ansverArray[count] + " и " + tracNextLevelArray[count]);
       refreshAllSkrioInfo();
       compare (ansverArray[count],tracNextLevelArray[count]);
       chekEnd ();
       refreshAllSkrioInfo();



   });


}


// function addInformationInHTML (information,adressHTML)


// addInformationInHTML("levelNumberClass", levelNunber, Level number = );

function refreshAllSkrioInfo(){
  $(".levelNumberClass").text( "Yore level is " +  level);
  $(".mistakeNumberClass").text( " You have "   +  misakeNumber + " mistake" );
  $(".numbercOfLeftButtonsClass").text( "Left  " +  numbercOfLeftButtons + " buttons");
}



var  testArray;
var testLevel=0;

function test(){
testLevel++;
console.log(testLevel);

}
function clean(){
  var tracNextLevelArray = [];
  var ansverArray = [];
  var count = -1;
  var misakeNumber = 0;
  console.log("массивы чисты");
}




// дальше мы делаем функцию которая будет сравнивать итые элементы массивов и
