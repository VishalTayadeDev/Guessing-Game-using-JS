// Guessing Game
// User enters a max number & then tries to guess a random generated number between 1 to max.

const max = prompt(" enter the max number");

const random=Math.floor(Math.random() * max)+1; 
console.log(random)
let guess = prompt("guss the number");

while(true){
    if(guess == "quit"){
        console.log('user quit');
        break;
    }

    if(guess == random){
        console.log("your are right! well done !! random number was", random);
        break;
    }else if(guess < random){
        guess = prompt("Hint : you guess was too small . please try again");
    }
    else{
        guess = prompt("Hint : your guess was too large. plaease try again");
    }
}
