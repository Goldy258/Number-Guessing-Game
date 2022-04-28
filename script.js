var message1 = document.getElementById("message1");
var message2 = document.getElementById("message2");
var message3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_numbers = [];

function play() {
  var user_guess = document.getElementById("guess").value;
  console.log(user_guess);
  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    guessed_numbers.push(user_guess);
    no_of_guesses += 1;

    if (user_guess < answer) {
      message1.textContent = "Your guess is too low.";
      message2.textContent = `No. of guesses: ${no_of_guesses}`;
      message3.textContent = `The numbers you have already guessed are: ${guessed_numbers}`;
    } else if (user_guess > answer) {
      message1.textContent = "Your guess is too high.";
      message2.textContent = `No. of guesses: ${no_of_guesses}`;
      message3.textContent = `The numbers you have already guessed are: ${guessed_numbers}`;
    } else if (user_guess == answer) {
      message1.textContent = "Congratulations You Win!!";
      message2.textContent = `The number was: ${answer}`;
      message3.textContent = `You guessed it in ${no_of_guesses} guesses`;
      document.getElementById("guessSubmit").disabled = true;
    }
  }
}

document.getElementById("guess").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    document.getElementById("guessSubmit").click();
  }
});

console.log(answer);
console.log(no_of_guesses);
console.log(guessed_numbers);
