// // GAME FUNCTION:
// // - Player must guess a number between a min and max
// // - Player gets a certain amount of guesses
// // - Notify player of guesses remaining
// // - Notify player of the correct answer if he loses
// // - Let player choose to play again

// // Label variables involved
// let min = 1,
//   max = 10,
//   guessTries = 3,
//   correctNum = getRandomNum(min, max);

// // Label UI elements
// const game = document.querySelector("#game"),
//   minNum = document.querySelector("#min-num"),
//   maxNum = document.querySelector("#max-num"),
//   guessInput = document.querySelector("#guess-input"),
//   guessBtn = document.querySelector("#guess-btn"),
//   message = document.querySelector(".message");

// // Assign UI min & max
// minNum.textContent = min;
// maxNum.textContent = max;

// // Play Again Event Listener
// game.addEventListener("mousedown", function(e) {
//   if (e.target.className === "play-again") {
//     window.location.reload();
//   }
// });

// const displayMsg = document.querySelector("p");
// displayMsg.textContent = `Give a number between ${min} and ${max}`;

// // Listen for Guess
// const submitBtn = guessBtn.addEventListener("click", function() {
//   // console.log("Oh, you're working?");
//   let guess = parseInt(guessInput.value);
//   // console.log(typeof(guess));

//   // Validate (check for Nan, < min, > max)
//   if (isNaN(guess) || guess < min || guess > max) {
//     setMessage(`Please enter a number between ${min} and ${max}`, "red");
//     // console.log("Please follow the instructions of the game");
//   }
//   //   Check if Won
//   if (guess === correctNum) {
//     gameOver(true, `${correctNum} is Correct. YOU WIN!`);
//     // // Disable input
//     // guessInput.disabled = true;
//     // // Change border color
//     // guessInput.style.borderColor = "green";
//     // // Display message
//     // setMessage(`${correctNum} is Correct. YOU WIN!`, "green");
//   } else {
//     guessTries -= 1;
//     //   Check if lost
//     // if (guessTries === 0) {
//     if (guessTries === 0) {
//       gameOver(false, `Sorry you Lost. The correct number is ${correctNum}`);

//       //   (guess > min && guess != correctNum) ||
//       //   (guess < max && guess != correctNum)
//       // Disable input
//       //   guessInput.disabled = true;
//       //   // Change border color
//       //   guessInput.style.borderColor = "blue";
//       //   // Display message
//       //   setMessage(`Sorry you Lost. The correct number is ${correctNum}`, "blue");
//     } else {
//       // Change border color
//       guessInput.style.borderColor = "red";
//       // Clear input
//       guessInput.value = "";
//       // Tell user it's the wrong number
//       setMessage(`${guess} not correct, ${guessTries} guesses left`);
//     }
//   }
// });
// // Game over function
// function gameOver(won, msg) {
//   let color;
//   won === true ? (color = "green") : (color = "red");
//   // Disable input
//   guessInput.disabled = true;
//   // Change border color
//   guessInput.style.borderColor = color;
//   //   Set text color
//   message.style.color = color;
//   //   Clear Data
//   //   guessInput.value = "";
//   // Display message
//   setMessage(msg);

//   // Play Again?
//   guessBtn.value = "Play Again";
//   guessBtn.className += "play-again";
// }

// // Correct Number Function
// function getRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // Set message
// function setMessage(msg, color) {
//   message.style.color = color;
//   message.textContent = msg;
// }
// // Check if won - disable input, change behaviour
// // if (guess === correctNum) {
// //     console.log('YOU WON');
// //     guessInput.style.borderColor = "green";
// //     guessInput.disabled = true;
// // }

// // // Specify submit behaviour
// // document.getElementById("guess-value").addEventListener("click", checkAnswer);

// // function checkAnswer(e) {
// // //   alert("Hey There!");
// //   // Set a variable for Correct Number
// //     const correctValue = 7;
// //   // Check results after input
// //     const userGuess = document.getElementById("guess-input").value;
// //     if (parseInt(userGuess) == correctValue) {
// //         // alert("That's Correct")
// //         function positiveFeedback() {
// //             const feedback = document.createAttribute('div');
// //             feedback.className = 'positive-feedback';
// //             const text = document.createTextNode("That's Correct!");
// //             feedback.appendChild(text);
// //         feedback.querySelector('.positive-feedback').style.display = 'block';
// //     }} else {
// //         alert("Sorry buddy, try again");
// // feedback.document.getElementById.style.display = 'block';
// //   positiveFeedback();
// // function positiveFeedback() {
// // const feedback = document.createAttribute('div');
// // feedback.className = 'positive-feedback';
// // const text = document.createTextNode("That's Correct!");
// // feedback.appendChild(text);
// // feedback.document.getElementById.style.display = 'block';

// //  Feedback text (Positive)
