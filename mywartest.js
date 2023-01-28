const chai = require('chai');
const assert = chai.assert;

describe('Player', function() {
    let player;
    beforeEach(function() {
        player = new Player("John Doe");
        player.hand = [new Card("A", "hearts"), new Card("K", "diamonds")];
    });

    it('should remove and return the first card from the player\'s hand', function() {
        const expectedCard = player.hand[0];
        const card = player.playCard();
        assert.deepEqual(card, expectedCard);
        assert.lengthOf(player.hand, 1);
    });
});

describe('Game', function() {
    let game;
    beforeEach(function() {
        game = new Game();
        game.cards = [new Card("A", "hearts"), new Card("K", "diamonds"), new Card("Q", "spades")];
    });

    it('should remove and return the specified number of cards from the top of the deck', function() {
        const expectedCards = game.cards.slice(0, 2);
        const cards = game.deal(2);
        assert.deepEqual(cards, expectedCards);
        assert.lengthOf(game.cards, 1);
    });
});