const { expect } = require('chai');
describe('Player class', () => {
  it('should be able to play a card', () => {
    const player = new Player('Test Player');
    player.hand = [new Card(5, 'hearts')];
    expect(player.playCard()).to.deep.equal(new Card(5, 'hearts'));
    expect(player.hand.length).to.equal(0);
  });
});

const chai = require('chai');
const expect = chai.expect;

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player('Test Player');
    player.hand = [new Card(5, 'hearts'), new Card(3, 'diamonds')];
  });

  it('should remove and return the first card in the player\'s hand', () => {
    const card = player.playCard();
    expect(card.value).to.equal(5);
    expect(card.suit).to.equal('hearts');
    expect(player.hand.length).to.equal(1);
  });
});