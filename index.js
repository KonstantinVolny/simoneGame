// Variabl List
var level=2 ;
var tracNextLevelArray = [];
var ansverArray = [];
var count = 0;
var misakeNumber = 0;
var gameIsOn = 1;
var numbercOfLeftButtons = 0;

//funcion List

//enter in Game

function main (){
// refreshAllSkrioInfo();
  if (gameIsOn == 1) {
   console.log("функция майн запущена");
    gameIsOn = 0;
    count=0;
    misakeNumber=0;
    ansverArray=[];
    refreshAllSkrioInfo();

    tracGenerator();
    showTrac();
    chekAll();
    goLevel();
    chekAll();

  } else {
    console.log("отмена повторного запуска");
  }
return 0;
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

 function goLevel(){
//    $("button").click(chekAll());
// console.log(" goLevel is activ")
  $("button").click(function(){
      var numberOfButten = $(event.target).text();
          console.log("приняли значение с кнопки " + numberOfButten );
          console.log("щелчок номер" + count );
      if ( numberOfButten == tracNextLevelArray[count] )
      {
        console.log("сравнили значение  " + numberOfButten + " с итым эл. массива " + tracNextLevelArray[count] )
      ansverArray.push(numberOfButten);
      console.log("добавили в массив  " + ansverArray);
      count =  count + 1;
      numbercOfLeftButtons = level-ansverArray.length;
      refreshAllSkrioInfo();
              if(ansverArray.length==tracNextLevelArray.length ){
                level++;
                gameIsOn = 1;
                ansverArray=[];
                count=0;
                refreshAllSkrioInfo();
                console.log("Next level is " + level + " . Click any button to start.");
                return 0;
              }
      numbercOfLeftButtons = tracNextLevelArray.length - ansverArray.length ;
       refreshAllSkrioInfo();
    }else{

      // misakeNumber++;
      $("body").addClass("errorClass");
      // console.log("ошибка");
        //await sleep(200);
      $("body").removeClass("errorClass");
      refreshAllSkrioInfo();
    }

    return 0;

   });

return 0;
}

// function addInformationInHTML (information,adressHTML)


// addInformationInHTML("levelNumberClass", levelNunber, Level number = );

function refreshAllSkrioInfo(){
  $(".levelNumberClass").text( "Yore level is " +  level);
  $(".mistakeNumberClass").text( " You have "   +  misakeNumber + " mistake" );
  $(".numbercOfLeftButtonsClass").text( "Left  " +  numbercOfLeftButtons + " buttons");
}


function clean(){
  var tracNextLevelArray = [];
  var ansverArray = [];
  var count = 0;
  var misakeNumber = 0;
  console.log("очистка произошла");
}


function chekAll(){
  console.log("count = " + count);
    console.log("ansverArray = "+ ansverArray);
      console.log( "tracNextLevelArray" + tracNextLevelArray);
        console.log( "level = " + level);
}
