var expect = chai.expect();

var expect = chai.expect;

//mocha is a testing framework
//chai is an assertion library (assertion library is a library that allows you to write assertions. assertions are a way to check if something is true or not. if it is true, the test passes. if it is not true, the test fails.)



describe('createDeck', function () { //createDeck is the name of the function we are testing
    it('should make a deck of cards', function () { //quotes describe the test case
        const x = new Deck(); //create a new instance of the Deck class
        x.createDeck(); //x is the instance of the Deck class, createDeck is the function we are testing and we are calling it on the instance of the Deck class
        expect(x.deck.length).to.equal(52); //expect is a function that takes in a value and returns an object with a bunch of methods. to is a method that takes in a value and returns an object with a bunch of methods. equal is a method that takes in a value and returns a boolean. if the value is equal to the value passed into the expect function, the test passes. if the value is not equal to the value passed into the expect function, the test fails.
    });
});

//create a function to check if player hands have 26 cards
describe('dealDeck', function () { //createDeck is the name of the function we are testing
    it('should deal 26 cards to each player', function () { //quotes describe the test case. it is a function that takes in a string and a function. the string describes the test case. the function is the test case.
        const x = new Deck(); //create a new instance of the Deck class
        x.createDeck(); //x is the instance of the Deck class, createDeck is the function we are testing and we are calling it on the instance of the Deck class
        x.shuffleDeck(); //shuffle the deck
        x.dealDeck();   //deal the deck
        expect(player1.hand.length).to.equal(26);
        expect(player2.hand.length).to.equal(26);
    });
});

// create a function that checks if player 1 and player 2 have 0 points at the start of the game

describe('checkForZero', function () { //createDeck is the name of the function we are testing
    it('should check if player 1 and player 2 start with 0 points', function () { //quotes describe the test case. it is a function that takes in a string and a function. the string describes the test case. the function is the test case.
        let player1 = new Person('player1');
        let player2 = new Person('player2');

        expect(player1.score).to.equal(0);
        expect(player2.score).to.equal(0);
    });
});

describe('checkName', function () { //createDeck is the name of the function we are testing')
    it('should check if player1.name and player2.name string lengths are greater than 0', function () {
        //we don't need to create a new instance of Person because we already created one in scripts.js and we can access it here
        expect(player1.name.length).to.be.greaterThan(0);
        expect(player2.name.length).to.be.greaterThan(0);
        console.log(player2.name.length)
    })
})