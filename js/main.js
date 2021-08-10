// Basics of JavaScript

/*
    Multiline comment syntax
    -- Variable Declaration in JS --
    Primitive Data Types:  Strings, Integers, Floats, Boolean, Arrays(list), Objects(dictionaries)
    Functions in JS
    Looping/Conditional Statements in JS
*/

// String Variable
var name_1 = 'Joel' // can use: let name_1 or const name_1
console.log(name_1)

// difference between var, const, let -- Mostly scope
/*
    var keyword is used to instantiate a global variable anywhere on the page
    let keyword is used to instantiate clack bound variable inside an object, loop, function, etc
    const is exactly the same as let, but does not allow value stored to change/override
*/

// const name_2 = 'Coding Temple'
// name_2 = 'Nate W'
// console.log(name_2)   
// (unable to change value)

let name_2 = 'Coding Temple'
name_2 = 'Nate W'
console.log(name_2)

//Integer variable
let some_number = 80;
console.log(some_number)

//Float variable
let some_float = 3.14;
console.log(some_float)

let some_array = [1,2,3,4,5];
console.log(some_array)

//Object Variable
var some_object = {'test': 'Here is our first object'}
console.log(some_object)

//JS Hoisting example
console.log(some_new_string) // not common to place action beforehand //organizational tactic to be used up top
var some_new_string = 'This is a new string';  //hoisting va some_new_string to the top and at some point will be defined from second console later
console.log(some_new_string)  

//longer hoisting version
var first_name;
var last_name;
console.log(first_name)  //undefined
first_name = 'Nate'
last_name = 'Welter'
console.log(first_name)
console.log(last_name)

//A better way of declaring variable
let new_string = '123CodingTemple';
const other_string = 'CodingisFun';

/*
    Basic Math Operations
*/

//Addition
let sum = 5+5;   //incrementation +=5
console.log(sum)
console.log(5+5)

//Subtraction
let diff = 10 - 5; //incrementation -=5
console.log(diff)

//Multiplaction
let prod = 5*5;   //increment *=5
console.log(prod)

//Division
let div = 5 / 5; //decrement /=5
console.log(div)

//Exponential
let square = 5**2; //increment **=2
console.log(square)

//Ceiling and Floor
let find_ceil = Math.ceil(25.8); //round up = 26
console.log(find_ceil)

let find_floor = Math.floor(25.8); //round down = 25
console.log(find_floor)

//Modulo(remainder) same as Python
console.log(10%2) // = 0  //2 goes into 10 evenly with 0 remainder

//Mind Bender #1
let this_var = some_float + '4'; //turned '3.14' into string + '4' and contatinated '4' // = 3.144
console.log(this_var)
//'3.14' + '4' = 3.144

//Mind Bender #2
let another_var = some_float + parseFloat('4');
console.log(another_var)

//Variable redeclaration using let
let nfl_goat = 'Tom Brady';
console.log(nfl_goat)

nfl_goat = 'Peyton Manning';  //don't need to use let again
console.log(nfl_goat)

//BAD redeclaration - will cause Syntax Error bc let nfl_goat has already been declared above
//let nfl_goat = 'Eli Manning';
//console.log(nfl_goat)


/*
    ==== JAVASCRIPT FUNCTIONS ====
*/

//Regular named function (no parameters)
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}
console.log(addNums())  //call function after {}bracket


//function with 2 parameters
function addNums2(num, num2){   //defined it and gave it a name
    return num + num2
};
console.log(addNums2(10, 12))  //pass into two params

//same as

//defining function as a variable
let addNums3 = function(num, num2){
    return num + num2
};
console.log(addNums3(10,12))

// ES6+ Arrow function syntax - no params
let multiplyNums = () => {  // some parameters passed into
    let num = 4;
    let num2 = 5;
    return num*num2
}
console.log(multiplyNums())

/*
    ES6 Syntax with params
    SINGLE PARAMETER - does not need paranethese vs MULTIPLE PARAMETERS does need parantheses
*/
//single param
let cubed = (num) => {
    return num**3
};

let cubed2 = num => {
    return num**3
};
console.log(cubed(3))
console.log(cubed2(3))

//multiple params
let doubleNum = (num1, num2) => {
    return (num1 *2) + (num2 *2)
};
console.log(doubleNum(10,2))


//JS Closure
//Self-Invoking Function

console.log((function(name){  //call function right after defining
    let hello = 'Hello World' + name;
    return hello
})('Ala')) //pass in parameter


//JavaScript Control Flow
//If (conditional) Statements

let determineAge = (age) => {
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age <= 65){  //both statements must be True
            return 'Adult'
    } else {
            return 'Senior'
    }
};
console.log(determineAge(50))

//OR keyword || 
let determineAge2 = (age) => {
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 || age <= 65){  //or either statement can be True
            return 'Adult'
    } else {
            return 'Senior'
    }
};
console.log(determineAge(50))


//Ternary Operators
//syntax:
// If condition if so? <value to return> : <another condition (else if)> ? <next value to return>: <else block value>

let determineAge3 = (age) => {
    return (age < 18)? 'Minor': (age >= 18 && age <= 65) ? 'Adult': 'Senior'
};
console.log(determineAge3(50))


//For Loop in JS
//For Loop syntax -- for (keyword)(counter; condition; incrementer/decrementer)
//For Loop must have counter; condition; increm/decrem

let countByOne = () =>{
    //For Loop
    for(let i = 0; i < 20; i++){   //i++ same as i+1
    //define counter variable, run for loop as long as i is less than 20
        console.log(i)
    }
    return 'The counting has stopped'
};
console.log(countByOne())

//decrementation for loop
let decreaseByOne = () =>{
    //For Loop
    for(let i = 20; i > 0; i--){   //i++ same as i+1
    //define counter variable, run for loop as long as i is less than 20
    //start i by 20, while i is greater than 0, descrease by 1
        console.log(i)
    }
    return 'The counting has stopped'
};
console.log(decreaseByOne())

//While Loop - JS
//with any condition
let countWithWhile = () =>{
    let i = 0; //counter
    let text = '';  //text was blank and produces one large string
    
    while(i < 10){  
        text += `This number is ${i} \n`
        i++ //incrememnt
    }
    return text //returned 
}
console.log(countWithWhile())


//Do-While Loop in JS
//Where condition is checked, before or after?
//do always follows with while some condition
let countWithDoWhile = () =>{
    let i = 0; //Counter
    let text = '';

    //Do something first then check while statement to run at least once // condition does not have to be True
    do{
        text += `This number is ${i} \n`
        i++
    }
    while(i < 10) //check once before first while check, stops up to 10 not including 10 bc less than
    return text
}
console.log(countWithDoWhile())

/*
    JS Arrays: Looping, methods, Array String Methods
*/

//Create a new array group_of_names
let group_of_names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty']   //total length of 5, always start at 0
//grab value by index
console.log(group_of_names[0]) //Terry


// Deconstruction of an array
var terry, ben, ash;
[terry, ben, ash] = group_of_names
// terry = group_of_names[0]
// ben = group_of_names[1]
// ash = group_of_names[2]
console.log(terry,ben,ash)

//Method #1 - most common for looping through Arrays
//by index, related to specific location, go by i by indexing
let showNames = () =>{
    for(let i = 0; i < group_of_names.length; i++){ //i++ indexing by +1 or every index
        console.log(group_of_names[i])  //groups_of_names at index 1 at each 
    }
    return 'Done with List'
};
console.log(showNames())


//Method #2 for looping (forEach())
group_of_names.forEach(     //for each num take in another function on groupofnames
    num => console.log(num)
);

//class objects like .append(), .sort(), etc can be applied to list[]
//JS Array Method: Array.toString()
console.log(group_of_names.toString())
//typecheck
console.log(typeof(group_of_names.toString()))


//JS ARRAY METHODS: .map(), .filter(), .reduce()
//instantiate objects 
//return a new list of names - create na empty list, append new list and return new list
let b_names = group_of_names.map(i =>{ //taking in a callback function
    if (i[0] == 'B'){
        //if i at index 0 is equal to captiol B, return i
        return i
    }else{
        return 'not B name'
    }
})  
console.log(b_names)

//Long form of .map()
let b_names2 = () =>{
    let new_array = [];
    for (let i = 0; i < group_of_names.length; i++){
        if (group_of_names[i][0] == 'B'){   
            new_array.push(group_of_names[i]) //.push is append
        }
    }
    return new_array
};
console.log(b_names2())

//.reduce()
const nums = [2,4,6,8,10] //counter +=2, +=4, +=6...
let nums_reduce = nums.reduce((accumulator, current_num) => {
    return accumulator + current_num
});

//long version
counter = 0
for(let i = 0; i < nums.length; i++){
    counter += nums[i]
}
console.log(counter)

// .filter()
let b_names3 = group_of_names.filter(element => element[0] == 'B')
console.log(b_names3)

//Array methods with sting values: .join(), .slice(), .search(), .split()
console.log(group_of_names.join(", "))  //separater ("/") ("-")

console.log(group_of_names.slice(0,3))  //groupofnames[0:3] start at 0 up to 3

// .splice()
let captured_val = group_of_names.splice(0, 1, 'Freddie') // remove at index 0, how many to remove, replace with what
console.log(`This value was removed from the list ${captured_val}`)
console.log(group_of_names)


// HW #2
let replaceGoku = (a_list) => {
    for(let i = 0; i < a_list.length; i++){
        if(i % 2 == 0){
            a_list.splice(i, 1, 'Goku')
        }
    }
    return a_list
};
console.log(replaceGoku(group_of_names))


// Using .search() and .slice() on array values that are strings
console.log(group_of_names[0].search('G'))  //same as .index() // index = 0

// String.slice()
console.log(group_of_names[1].slice(0, group_of_names.length)) //start at index 0

console.log(group_of_names[1].slice(0,2)) //defaults to start=0, stop =last index


//codewars.com
answer
