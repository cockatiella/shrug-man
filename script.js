const prompt = require('prompt-sync')({
    signal: true
});


//make an array of movies
let movies = ['matrix reloaded', 'god of gamblers', 'kung fu hustle', 'inglorious bastards', 'reservoir dogs', 'scarface', 'the departed', 'the exorcist', 'terminator', 'resident evil', 'clueless', 'legally blonde'];

//pick a random movies from the array
let randomMovie = movies[Math.floor(Math.random() * movies.length)];

//set up the answer array to show how many letters are in the movie

let answerArray = [];
for (let i = 0; i < randomMovie.length; i++) {
    if (randomMovie[i] === ' ') {
        answerArray[i] = ' ';
    } else {
        answerArray[i] = '_';
    }

}
//create a variable to track the number of remaining letters
let remainingLetters = randomMovie.length;
let attempts = 0;
let emojis = `¯\\_(:/)_/¯`;
let displayEmoji = []


//The main game loop:

//while the player still has letters to guess
while (attempts < emojis.length) {
    console.clear()
    console.log(displayEmoji.join(''))
    //show the player their progress
    console.log(answerArray.join(' '));
    //get a guess from the player
    let guess = prompt('Guess a letter. The result will be a movie name, or click Cancel to stop playing.');
    //if the guess is invalid, let the player know
    if (guess === null) {
        break;//exit the game loop
    } else if (guess.length !== 1) {
        console.log('Please enter a single letter.');
    } else if (randomMovie.includes(guess)) {
        //update the game state with the guess
        for (let j = 0; j < randomMovie.length; j++) {
            if (randomMovie[j] === guess) {
                answerArray[j] = guess; //update answer
                remainingLetters--; //subtract from the number of letters remaining
            }
        }
    } else {
        displayEmoji.push(emojis[attempts])
        attempts++;
        if (attempts === emojis.length) {
            console.log('You lose')

        }
    }
    // end of the game loop
}
//let player know the answer
console.log(answerArray.join(' '));
console.log('The answer was ' + randomMovie);
console.log('Thanks for playing!');

