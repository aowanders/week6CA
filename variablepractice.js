// Declare a variable called name and assign it the value of your name as a string.

// Declare a variable called age and assign it your age as a number.

// Declare a variable called isStudent and assign it a boolean value depending on whether or not you are currently a student.

// Declare a variable called shoppingList and assign it an array of strings representing items you need to buy at the store.

// Declare a variable called person and assign it an object with properties for the person's name, age, and occupation.

// Declare a variable called x and assign it the value of the result of adding 2 and 3.

// Declare a variable called y and assign it the value of the result of multiplying x by 5.

// Declare a variable called z and assign it the value of the result of subtracting y from 10.

// Declare a variable called greeting and assign it the concatenation of "Hello, " and the value of the name variable.

// Declare a variable called result and use it to store the value of a comparison operation that compares the value of the age variable to the number 18.
let name = 'Adam'; 
let age = 44;
let isStudent = true;
let shoppingList = ['chicken', 'premade meals', 'juice', 'granola bars', 'trailmix'];
let person = {
    name: 'Adam',
    age: 44,
    occupation: 'traveler',
}
let x = (2 + 3);
let y = (x * 5);
let z = (10 - y);
let greeting = ('Hello, ' + name);
let result = (age == 18);


// Create an object called book with properties for the book's title, author, and number of pages. Log the book's title to the console.

// Create an object called employee with properties for the employee's name, job title, and salary. Add a method to the object that calculates the employee's raise by a certain percentage.

// Create an object called movie with properties for the movie's title, director, and release date. Add a method to the object that returns the movie's release year.

// Create an object called product with properties for the product's name,
//  price, and quantity in stock. Add a method to the object that calculates 
// the total value of the product based on the quantity in stock and price.

// Create an object called menu with properties for the menu's name, items, and prices. Add a method to the object that calculates the total cost of all the items on the menu.

let book = {
    title:'Learning To Code',
    author:'Alan Olson',
    pages:321,

}
console.log(book.title);

let employee = {
    name:'Scott Bowman',
    jobTitle:'Web Developer',
    salaray:30000,
    raise (percent){
      return (percent/100) * this.salaray;  
    }
}    
console.log(employee.raise(5));

let movie = {
    title: 'Learning Syntax',
    director: 'My Self',
    releaseDate: [10, 10, 2023],
    releaseYear (test){
        return test + this.releaseDate[2];
    },
    testFunction(){

    },
    testFunction2 (){

    }
    // why can't i add a second function to an object? testFunction (newtest){  
        //why wont this print out string tex with it  return this.releaseDate[2];
            // how do you define mediaStatement without using template literals
}
console.log(movie.releaseYear('sample text '));

let product = {
    name:['soap', 'chips', 'pop','towels','bread'],
    price: [3,4,5,6,8],
    quantity: [10,11,12,13,14],
    totalValue(price, quantity) {
        return (price * quantity);
    }
    // probably not the most efficient way to write this, but I got the answer within 5 tries.
    retrun product.price[0], product.quantity[0]
}
console.log('For ' + product.name[0] +' I have ' + product.totalValue(product.price[0], product.quantity[0])+ ' dollars worth of inventory.');

let menu = {
    name: 'Taps Bar & Grill',
    item:['taco','burger', 'pizza', 'burito', 'salad'],
    prices: [3, 12, 20, 8, 10],
   totalCost: function (){
    let sum = 0;
        for (let i = 0; i < this.prices.length; i++)
        sum += this.prices[i];
        return sum;
    }
    //I thought methods in objects didn't need the special "function keyword" so why did I have to use it here?
    //I need more clarification on the sum thats running through here so i know what i did
    //why do I need to put an empty () in the console.log to make this work
    
}
console.log(menu.totalCost());


// let book = {
//     title: 'Ginger Bread Man',
//     author: 'Cole Peterson',
//     pages: 33,

// }
// console.log(book.title);

// let test = 3200;
// console.log(test);  


// let employee = {
//     name: 'Scott',
//     title:'operator',
//     salary: 38000,
//     raise (amount) {
//         return amount / this.salary;
//         } 
//     // whatiwant (this.salary * % = 'raise percentage'){

//     // }          
// }


// console.log (employee.raise (1000) * 100);

let movie1 = {
    title: 'Learning Object Syntax',
    director:'Alan Jones',
    launchDate: 2023,
    releaseYear (month, day){
        return  month + day;
    }
}
console.log('This movie will be released into theaters on ' +(movie1.releaseYear('October ', '20th, ') +(movie.launchDate)));

// let menu = {
//     name:'Pablos',
//     items: [],
//     prices:[],
//     addItems (menuItems, menuPrices){
//         this.items.push(menuItems);
//         this.prices.push(menuPrices);
//         let sum = 0;
//         for (let i = 0; i < this.prices.length; i++) {
//             sum += this.prices [i];
//         }
//         return sum;
    
//     }
    
    
// }

// console.log(menu.addItems('taco', 3));
// console.log(menu.addItems('pizza', 20));
// console.log(menu.addItems('burger', 12));
// console.log(menu.addItems('burito', 8));
// console.log(menu.items);
// console.log(menu.prices);
// console.log (sum);