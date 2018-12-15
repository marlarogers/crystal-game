// Computer number = 1-120
//4 gems (1, 5, 8, 12)
//set up click function for all gems, increment user score by gem clicked. 
//add some logic - create if else statement which checks if the userscore is above the target score
    //if above, they lose. if equal, they win. if under, they can keep clicking 
$(document).ready(function() {

var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

var targetScore = 0;
var userScore = 0;

var wins = 0;
var losses = 0;

function generateGemValues(){
    return Math.ceil(Math.random() * 12)
}
function generateRandomValue(){
    var randomNumber = Math.ceil(Math.random() * 120)
    return randomNumber
}

function startGame(){
    targetScore = generateRandomValue();
    gem1 = generateGemValues();
    gem2 = generateGemValues();
    gem3 = generateGemValues();
    gem4 = generateGemValues();
    console.log(gem1, gem2, gem3, gem4, targetScore);
    $("#target-score").text(targetScore);
    
      }

function resetGame() {
    targetScore = generateRandomValue();
    $("#target-score").text(targetScore);
    gem1 = generateGemValues();
    gem2 = generateGemValues();
    gem3 = generateGemValues();
    gem4 = generateGemValues();
    userScore = 0;
    console.log('reset: ', gem1, gem2, gem3, gem4, targetScore);
    }

    $("#gem1").click(function() {
        userScore = userScore + gem1;
        console.log("clicked gem1 = " + gem1);
        console.log(userScore);
        $("#total-score").text(userScore);
        if (userScore == targetScore) {
            wins++;
            $("#wins").text(wins);
            resetGame();
          }
        
        else if (userScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            resetGame();
            }
    })

    $("#gem2").click(function() {
        userScore = userScore + gem2;
        console.log("clicked gem2 = " + gem2);
        console.log(userScore);
        $("#total-score").text(userScore);
        if (userScore == targetScore) {
            wins++;
            $("#wins").text(wins);
            resetGame();
          }
        
        else if (userScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            resetGame();
            }
    })

    $("#gem3").click(function() {
        userScore = userScore + gem3;
        console.log("clicked gem3 = " + gem3);
        console.log(userScore);
        $("#total-score").text(userScore);
        if (userScore == targetScore) {
            wins++;
            $("#wins").text(wins);
            resetGame();
          }
        
        else if (userScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            resetGame();
            }
    })

    $("#gem4").click(function() {
        userScore = userScore + gem4;
        console.log("clicked gem4 = " + gem4);
        console.log(userScore);
        $("#total-score").text(userScore);
        if (userScore == targetScore) {
            wins++;
            $("#wins").text(wins);
            resetGame();
          }
        
        else if (userScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            resetGame();
            }
    })
    generateGemValues()
    startGame()

})





