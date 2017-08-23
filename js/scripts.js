//Backend Logic

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function Player(name, total, rollTotal) {
  this.name = name;
  this.total = total;
  this.rollTotal = rollTotal;
}

var player1 = new Player ("Player 1", 0, 0);
var player2 = new Player ("Player 2", 0, 0);

Player.prototype.roll = function() {
  roll = getRandomInt(1,7);
  console.log(roll)
  if (roll === 1) {
    this.rollTotal = 0;
    $(".player1,.player2").toggle();
  } else {
    this.rollTotal += roll
  }
}

Player.prototype.hold = function() {
  this.total += this.rollTotal;
  this.rollTotal = 0;
  if (this.total >= 100){
    alert(this.name + " Wins!")
  }
  $(".player1,.player2").toggle();
}


//Frontend Logic
$(document).ready(function(){
  $("#rollP1").click(function(event){
    event.preventDefault();

    player1.roll();
    $("#totalP1").text(player1.total);
    $("#rollTotalP1").text(player1.rollTotal);
    $(".roll").text(roll);


    console.log(player1);
  });

  $("#holdP1").click(function(event){
    event.preventDefault();

    player1.hold();
    if (player1.total >= 100){
      player2.rollTotal = 0;
      player2.total = 0;
      player1.rollTotal = 0;
      player1.total = 0;
    }
    $("#totalP1").text(player1.total);
    $("#rollTotalP1").text(player1.rollTotal);
    $("#totalP2").text(player2.total);
    $("#rollTotalP2").text(player2.rollTotal);
    console.log(player1);
  });

  $("#rollP2").click(function(event){
    event.preventDefault();

    player2.roll();
    $("#totalP2").text(player2.total);
    $("#rollTotalP2").text(player2.rollTotal);
    $(".roll").text(roll);
    console.log(player2);
  });

  $("#holdP2").click(function(event){
    event.preventDefault();

    player2.hold();
    if (player2.total >= 100){
      player2.rollTotal = 0;
      player2.total = 0;
      player1.rollTotal = 0;
      player1.total = 0;
    }
    $("#totalP1").text(player1.total);
    $("#rollTotalP1").text(player1.rollTotal);
    $("#totalP2").text(player2.total);
    $("#rollTotalP2").text(player2.rollTotal);
    console.log(player2);
  });
});
