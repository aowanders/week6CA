class Card {
    constructor (value, suit){
        this.value = value;
        this.suit = suit;

    }

}

class Deck {
    constructor (){
        this.cards = [];
        const suits = ["clubs \u2663", "diamonds \u2666", "hearts \u2665", "spades \u2660"];
        const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        for (let i = 0; i < values.length; i++){
            for (let j = 0; j < suits.length; j++){
                this.cards.push(new Card(values[i], suits[j]));
            }
        }

    }

}

class Player {
    constructor (name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    playCard() {
        return this.hand.shift();
    }

}


class Game {
    constructor (){
         this.cards = new Deck().cards;
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    deal(numCards) {
        return this.cards.splice(0, numCards);
    }
}

    
const game = new Game();
game.shuffle();
const player1 = new Player('Player 1');
const player2 = new Player('Player 2');

player1.hand = game.deal(26);
player2.hand = game.deal(26);

while (player1.hand.length > 0 && player2.hand.length > 0) {
  const card1 = player1.playCard();
  const card2 = player2.playCard();
  if (card1.value > card2.value) {
    player1.score++;
  } else if (card1.value < card2.value) {
    player2.score++;
  }
}

console.log(`${player1.name}: ${player1.score} points`);
console.log(`${player2.name}: ${player2.score} points`);

if (player1.score > player2.score) {
  console.log(`${player1.name} wins!`);
} else if (player1.score < player2.score) {
  console.log(`${player2.name} wins!`);
} else {
  console.log("It's a tie!");
} 

    

// const testingDeckClass = new Deck;
// console.log(testingDeckClass);
// const testCardClass = new Card;
// console.log(testCardClass);
// const testGameClass = new Game;
// console.log (testGameClass);
// const testPlayerClass = new Player;
// console.log(testPlayerClass);
// const testCard = new Card("A", "hearts");
// console.log(testCard);

