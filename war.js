class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      for (let i = 2; i <= 14; i++) { // 14 for Ace
        for (let j = 0; j < suits.length; j++) {
          this.cards.push(new Card(i, suits[j]));
        }
      }
      this.shuffle();
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
  
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
    }
  
    playCard() {
      return this.hand.shift();
    }
  }
  
  const deck = new Deck();
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  
  player1.hand = deck.deal(26);
  player2.hand = deck.deal(26);
  
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