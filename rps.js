function rps(humanMove){
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const comMove = options[randomIndex];
    const resultDiv = document.getElementById("result")

    if (comMove === "rock"){
        if (humanMove === "rock"){
            decisionMade();
            audio.play()
            audio.onended = function() {
                alert("Computer chose Rock. It's a draw!")
                resultDiv.innerHTML = "<p>Computer chose Rock. It's a draw!</p>"
                tracker("draw")
                resetTimer();
            }
        }
        if (humanMove === "paper"){
            decisionMade();
            audio.play()
            audio.onended = function(){
                alert("Computer chose Rock. You WIN!")
                resultDiv.innerHTML = "<p>Computer chose Rock. You WIN!</p>"
                humanScore += 1
                tracker("win")
                resetTimer();
            }
        }
        if (humanMove === "scissors"){
            decisionMade();
            audio.play()
            audio.onended = function(){
                alert("Computer chose Rock. You LOSE!")
                resultDiv.innerHTML = "<p>Computer chose Rock. You LOSE!</p>"
                comScore += 1
                tracker("lose")
                resetTimer();
            }
        }
    }
    if (comMove === "scissors"){
        if (humanMove === "rock"){
            decisionMade();
            audio.play()
            audio.onended = function(){
                alert("Computer chose Scissors. You WIN!")
            resultDiv.innerHTML = "<p>Computer chose Scissors. You WIN!</p>"
            humanScore += 1
            tracker("win")
            resetTimer();
            }
        }
        if (humanMove === "paper"){
            decisionMade();
            audio.play()
            audio.onended = function(){
                alert("Computer chose Scissors. You LOSE!")
                resultDiv.innerHTML = "<p>Computer chose Scissors. You LOSE!</p>"
                comScore += 1
                tracker("lose")
                resetTimer();
            }
        }
        if (humanMove === "scissors"){
            decisionMade();
            audio.play()
            audio.onended = function(){
                alert("Computer chose Scissors. It's a draw!")
                resultDiv.innerHTML = "<p>Computer chose Scissors. It's a draw!</p>"
                tracker("draw")
                resetTimer();
            }
        }
    }
    if (comMove === "paper"){
        if (humanMove === "rock"){
            decisionMade();
            audio.play()
            audio.onended = function(){
                alert("Computer chose Paper. You LOSE!")
                resultDiv.innerHTML = "<p>Computer chose Paper. You LOSE!</p>"
                comScore += 1
                tracker("lose");
                resetTimer();
            }
        }
        if (humanMove === "paper"){
            decisionMade();
            audio.play()
            audio.onended = function(){
                alert("Computer chose Paper. It's a draw!")
                resultDiv.innerHTML = "<p>Computer chose Paper. It's a draw!</p>"
                tracker("draw");
                resetTimer();
            }
        }
        if (humanMove === "scissors"){
            decisionMade();
            audio.play()
            audio.onended = function(){
                alert("Computer chose Paper. You WIN!")
                resultDiv.innerHTML = "<p>Computer chose Paper. You WIN!</p>"
                humanScore += 1
                tracker("win");
                resetTimer();
            }
        }
    }
}

function tracker(outcome){
    scoreDiv = document.getElementById("score")
    switch (outcome) {
        case "win":
            scoreDiv.innerHTML = "Computer:" + comScore +  " Human:" + humanScore
            break;
        case "lose":
            scoreDiv.innerHTML = "Computer:" + comScore +  " Human:" + humanScore
            break
        case "draw":
            scoreDiv.innerHTML = "Computer:" + comScore +  " Human:" + humanScore
            break
    }
}
function startTimer(){
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer(){
    timeLeft --;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= -1 && !decision){
        clearInterval(timerInterval);
        alert("Time's up! Too slow, try again");
        resetTimer()
    }
}

function decisionMade(){
    decision = true;
    clearInterval(timerInterval);
}

function resetTimer(){
    timeLeft = 5;
    decision = false;
    document.getElementById("timer").textContent = timeLeft;
    timerInterval = setInterval(updateTimer, 1000);
}


let timeLeft = 5;
let decision = false;
var timerInterval;
audio = document.getElementById("audio");
startTimer();

var humanScore = 0
var comScore = 0
document.getElementById("rock").addEventListener("click", function() {rps("rock");});
document.getElementById("paper").addEventListener("click", function() {rps("paper");});
document.getElementById("scissors").addEventListener("click", function() {rps("scissors");});