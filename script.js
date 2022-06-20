//make an array of movies
let movies = ['matrix reloaded', 'god of gamblers', 'kung fu hustle', 'inglorious bastards', 'reservoir dogs', 'scarface', 'the departed', 'the exorcist', 'terminator', 'resident evil', 'clueless', 'legally blonde'];

//pick a random movies from the array
let randomMovie = movies[Math.floor(Math.random() * movies.length)];

//set up the answer array to show how many letters are in the movie

let answerArray = [];
for (let i = 0; i < randomMovie.length; i++) {
    answerArray[i] = '_';
}
//create a variable to track the number of remaining letters
let remainingLetters = randomMovie.length;

//The main game loop:

//while the player still has letters to guess
while (remainingLetters > 0) {
    //show the player their progress
    alert(answerArray.join(' '));
    //get a guess from the player
    let guess = prompt('Guess a letter, or click Cancel to stop playing.');
    //if the guess is invalid, let the player know
    if (guess === null) {
        break;//exit the game loop
    } else if (guess.length !== 1) {
        alert('Please enter a single letter.');
    } else {
        //update the game state with the guess
        for (let j = 0; j < randomMovie.length; j++) {
            if (randomMovie[j] === guess) {
                answerArray[j] = guess; //update answer
                remainingLetters--; //subtract from the number of letters remaining
            }
        }
    }
    // end of the game loop
}
//let player know the answer
alert(answerArray.join(' '));
alert('The answer was ' + randomMovie);
alert('Thanks for playing!');

