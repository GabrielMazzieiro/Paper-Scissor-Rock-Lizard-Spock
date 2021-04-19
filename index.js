const scissors = $("#scissors");
const paper = $("#paper");
const rock = $("#rock");
const pentagon = $("#pentagon");
const lizard = $("#lizard");
const spock = $("#spock");

// get img id

const paperID = $("#paper").attr("id");
const scissorsID = $("#scissors").attr("id");
const rockID = $("#rock").attr("id");
const lizardID = $("#lizard").attr("id");
const spockID = $("#spock").attr("id");

let score = 0;
let chosenOption;
const gameOption = ["paper", "scissors", "rock", "lizard", "spock"];

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
  lizard.removeClass("end-game");
  spock.removeClass("end-game");
}

$(".play-again").click(() => {
  restartAnimation();
  $(".circle").attr("role", "button");
  scissors.removeClass("hide");
  lizard.removeClass("hide");
  spock.removeClass("hide");
  paper.removeClass("hide");
  rock.removeClass("hide");
  pentagon.removeClass("hide");
  paper.removeClass("chosen");
  lizard.removeClass("chosen");
  spock.removeClass("chosen");
  scissors.removeClass("chosen");
  rock.removeClass("chosen");
  initGame();
  $("#rock-chosen").removeClass("end-game");
  $("#paper-chosen").removeClass("end-game");
  $("#scissors-chosen").removeClass("end-game");
  $("#lizard-chosen").removeClass("end-game");
  $("#spock-chosen").removeClass("end-game");
});

// Game Animation
function initGame() {
  $(".circle").click((e) => {
    chosenOption = $(e.currentTarget).attr("id");
    // Tirar a função de click das imagens
    $(".circle").off("click").removeAttr("role");

    houseChoice = Math.floor(Math.random() * 5) + 1;
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
          case "spock":
            handleWin();
            break;
          case "lizard":
            handleLoss();
            break;
        }
        // Esconder as opções não escolhidas

        scissors.addClass("hide");
        spock.addClass("hide");
        lizard.addClass("hide");
        rock.addClass("hide");
        pentagon.addClass("hide");
        paper.addClass("chosen");
        // começar a animação das opções não escolhidas
        animation(paper);
        break;

      case scissorsID:
        // Esconder as opções não escolhidas
        paper.addClass("hide");
        rock.addClass("hide");
        pentagon.addClass("hide");
        scissors.addClass("chosen");
        spock.addClass("hide");
        lizard.addClass("hide");
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
          case "lizard":
            handleWin();
            break;
          case "spock":
            handleLoss();
            break;
        }
        break;

      case rockID:
        // Esconder as opções não escolhidas
        paper.addClass("hide");
        scissors.addClass("hide");
        pentagon.addClass("hide");
        rock.addClass("chosen");
        spock.addClass("hide");
        lizard.addClass("hide");
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
          case "lizard":
            handleWin();
            break;
          case "spock":
            handleLoss();
            break;
        }
        break;

      case lizardID:
        // Esconder as opções não escolhidas
        paper.addClass("hide");
        scissors.addClass("hide");
        pentagon.addClass("hide");
        lizard.addClass("chosen");
        spock.addClass("hide");
        rock.addClass("hide");
        // começar a animação das opções não escolhidas
        animation(lizard);
        // Regras do jogo para a opção escolhida
        switch (houseChoice) {
          case "scissors":
            handleLoss();
            break;
          case "paper":
            handleWin();
            break;
          case "rock":
            handleLoss();
            break;
          case "lizard":
            handleTie();
            break;
          case "spock":
            handleWin();
            break;
        }
        break;

      case spockID:
        // Esconder as opções não escolhidas
        paper.addClass("hide");
        scissors.addClass("hide");
        pentagon.addClass("hide");
        spock.addClass("chosen");
        lizard.addClass("hide");
        rock.addClass("hide");
        // começar a animação das opções não escolhidas
        animation(spock);
        // Regras do jogo para a opção escolhida
        switch (houseChoice) {
          case "scissors":
            handleWin();
            break;
          case "paper":
            handleLoss();
            break;
          case "rock":
            handleWin();
            break;
          case "lizard":
            handleLoss();
            break;
          case "spock":
            handleTie();
            break;
        }
        break;
    }
  });
}

initGame();
