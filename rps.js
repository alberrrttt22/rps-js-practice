function rps(humanMove){
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const comMove = options[randomIndex];
    const resultDiv = document.getElementById("result")

    if (comMove === "rock"){
        if (humanMove === "rock"){
            resultDiv.innerHTML = "<p>Computer chose Rock. It's a draw!</p>"
        }
        if (humanMove === "paper"){
            resultDiv.innerHTML = "<p>Computer chose Rock. You WIN!</p>"
        }
        if (humanMove === "scissors"){
            resultDiv.innerHTML = "<p>Computer chose Rock. You LOSE!</p>"
        }
    }
    if (comMove === "scissors"){
        if (humanMove === "rock"){
            resultDiv.innerHTML = "<p>Computer chose Scissors. You WIN!</p>"
        }
        if (humanMove === "paper"){
            resultDiv.innerHTML = "<p>Computer chose Scissors. You LOSE!</p>"
        }
        if (humanMove === "scissors"){
            resultDiv.innerHTML = "<p>Computer chose Scissors. It's a draw!</p>"
        }
    }
    if (comMove === "paper"){
        if (humanMove === "rock"){
            resultDiv.innerHTML = "<p>Computer chose Paper. You LOSE!</p>"
        }
        if (humanMove === "paper"){
            resultDiv.innerHTML = "<p>Computer chose Paper. It's a draw!</p>"
        }
        if (humanMove === "scissors"){
            resultDiv.innerHTML = "<p>Computer chose Paper. You WIN!</p>"
        }
    }
}



document.getElementById("rock").addEventListener("click", function() {rps("rock")});
document.getElementById("paper").addEventListener("click", function() {rps("paper")});
document.getElementById("scissors").addEventListener("click", function() {rps("scissors")});