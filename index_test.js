var expect = chai.expect;

describe ('myFunctions', function() {
    describe ('#doSomething', function() {
        it('supposed to join the two parameters or concatenate them if you want technical speak', function(){
            var x = doSomething ('Hello', 5);
            expect (x).to.equal('Hello5');
        });
        it('should throw an error if the first parameter is not a string', function (){
            expect (function(){
                doSomething(5,5);
                
            }).to.throw (Error);
        });
    });

});