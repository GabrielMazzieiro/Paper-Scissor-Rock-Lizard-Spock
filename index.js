const scissors = $("#scissors");
const paper = $("#paper");
const rock = $("#rock");
const triangle = $("#triangle");

// get img id

const paperID = $("#paper").attr("id");
const scissorsID = $("#scissors").attr("id");
const rockID = $("#rock").attr("id");

let score = 0;
let chosenOption;
const gameOption = ["paper", "scissors", "rock"];

const innerTimeOut = 1000;
const outerTimeOut = innerTimeOut * 2;

// Rules Button

$(".rules").click(() => {
  $("#rules-bg").css("display", "block");
});

// Close rules

$(".btn-close").click(() => {
  $("#rules-bg").css("display", "none");
});

// Make computer choice appear
function houseCircle() {
  $("#" + houseChoice + "-chosen")
    .removeClass("hide")
    .addClass("house-choice");
}

// Make header & wait-circle appear
function notChosen() {
  $("h2").removeClass("hide");
  $("#wait-circle").removeClass("hide");
}

// Change final Text & add Score if win
function handleWin() {
  $("#final").text("you win!");
  score++;
  setTimeout(() => {
    $(".score-number").text(score);
  }, innerTimeOut * 4);
}

function handleLoss() {
  $("#final").text("you lose!");
}

function handleTie() {
  $("#final").text("it's a tie!");
}

// Animation timers
function animation(choiceID) {
  setTimeout(() => {
    notChosen();
  }, innerTimeOut);

  setTimeout(() => {
    houseCircle();
    $("#wait-circle").addClass("hide");
    setTimeout(() => {
      $(".house-choice").addClass("end-game");
      $("h2").addClass("end-game");
      choiceID.addClass("end-game");
      setTimeout(() => {
        $("#game-result").removeClass("hide");
      }, innerTimeOut);
    }, innerTimeOut);
  }, outerTimeOut);
}

// Reset game to start over
function restartAnimation() {
  $("#" + houseChoice + "-chosen")
    .addClass("hide")
    .removeClass("house-choice");
  $("#game-result").addClass("reset");
  $("#house-pick").addClass("reset");
  $("#your-pick").addClass("reset");

  setTimeout(() => {
    $("#game-result").addClass("hide");
    $("#game-result").removeClass("reset");
    $("#your-pick").addClass("hide");
    $("#your-pick").removeClass("reset");
    $("#house-pick").addClass("hide");
    $("#house-pick").removeClass("reset");
  }, 500);

  $("#wait-circle").addClass("hide");

  $(".house-choice").removeClass("end-game");
  $("h2").removeClass("end-game");
  rock.removeClass("end-game");
  paper.removeClass("end-game");
  scissors.removeClass("end-game");
}

$(".play-again").click(() => {
  restartAnimation();
  $(".circle").attr("role", "button");
  scissors.removeClass("hide");
  paper.removeClass("hide");
  rock.removeClass("hide");
  triangle.removeClass("hide");
  paper.removeClass("chosen");
  scissors.removeClass("chosen");
  rock.removeClass("chosen");
  initGame();
  $("#rock-chosen").removeClass("end-game");
  $("#paper-chosen").removeClass("end-game");
  $("#scissors-chosen").removeClass("end-game");
});

// Game Animation
function initGame() {
  $(".circle").click((e) => {
    chosenOption = $(e.currentTarget).attr("id");
    // Tirar a função de click das imagens
    $(".circle").off("click").removeAttr("role");

    houseChoice = Math.floor(Math.random() * 3) + 1;
    houseChoice = gameOption[houseChoice - 1];
    console.log(houseChoice);

    switch (chosenOption) {
      case paperID:
        // Regras do jogo para a opção escolhida
        switch (houseChoice) {
          case "scissors":
            handleLoss();
            break;
          case "paper":
            handleTie();
            break;
          case "rock":
            handleWin();
            break;
        }
        // Esconder as opções não escolhidas
        scissors.addClass("hide");
        rock.addClass("hide");
        triangle.addClass("hide");
        paper.addClass("chosen");
        // começar a animação das opções não escolhidas
        animation(paper);
        break;

      case scissorsID:
        // Esconder as opções não escolhidas
        paper.addClass("hide");
        rock.addClass("hide");
        triangle.addClass("hide");
        scissors.addClass("chosen");
        // começar a animação das opções não escolhidas
        animation(scissors);
        // Regras do jogo para a opção escolhida
        switch (houseChoice) {
          case "scissors":
            handleTie();
            break;
          case "paper":
            handleWin();
            break;
          case "rock":
            handleLoss();
            break;
        }
        break;

      case rockID:
        // Esconder as opções não escolhidas
        paper.addClass("hide");
        scissors.addClass("hide");
        triangle.addClass("hide");
        rock.addClass("chosen");
        // começar a animação das opções não escolhidas
        animation(rock);
        // Regras do jogo para a opção escolhida
        switch (houseChoice) {
          case "scissors":
            handleWin();
            break;
          case "paper":
            handleLoss();
            break;
          case "rock":
            handleTie();
            break;
        }
        break;
    }
  });
}

initGame();
