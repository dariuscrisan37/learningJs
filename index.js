

//________________________________________________________________________________

// *************** JavaScript from Scratch to Master *********************

// _______________________________________________________________________________



// variables
// identifiers
// comments
// statements

/*var message;
message = 'Hi there';
message = 100;
console.log(message);


var sum = 1 + 1;*/

// JavaScript Data Types
//=======================

/**
	* Boolean
	* Null
	* Undefined
	* Number
	* String
	*Symbol

**/


/*var message='Hello World';
message = 100;
alert(typeof message); //string*/

//NULL Type ==========================

/*var computer = null;
alert(typeof computer);//empty object -to hold an data later on;*/

// Boolean Type ======================

/*var num1 = '100';
var num2 = 100;
var num3 = 100;
var boolNum = num1 === num2;
alert (typeof boolNum); //boolean
alert (num1 === num2); //false
alert (num2 === num3); //true        */

// Number Type ==========================

/*var integerNumber = 100;

var floatNumber = 100.05;

var float2 = 100.0; //JS returns integer Number - anules .0

console.log(integerNumber, floatNumber, float2); */

/* alert(Number.MAX_VALUE);

alert(Number.MIN_VALUE);
*/

//NaN ++++++++++

/*
var num = "ksdhflkdas";

alert(Number(num));

alert(NaN === NaN);//false */

//isNaN ++++++++++++++

/*alert(isNaN(NaN));//true
alert(isNaN(100));//false
alert(isNaN('100'));//false - JS interprets the NaNs strings to numbers if contain numbers
*/

/* alert(isNaN("blue"));//true
alert(isNaN(true));//false - true becomes 1 and false becomes 0
alert(isNaN(false));//false
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Parse gives us only the numbers if the parseInt looks for numbers

/*var num1 = parseInt("12345asdgf");
alert(num1);

var num2 = parseFloat('20.50');
alert(num2)
*/

// String Data Types ======================================

/*var name = "Ryan \ Dhungel"; //not printable string element

//alert(name);

console.log(name.length);

var age = 30;
var ageStringify = age.toString();//makes the number a string
console.log(typeof ageStringify);*/


//_______________________________________________________________________

// JavaScript Object Types ============================================

/**
	* creating object -{}, new
	* accessing properties - . []
	* accessing object properties with variables
	* updating object properties
	* adding new properties
	* delete properties
	* object has property?
	* nested object
*/

//new Object();

/*var person = new Object();

var person = {
	name:'Ryan',
	age: 30,
	'my favorite movie is':'ARC',
	sayName: function(){
		return this.name;
	},

	likes: {
		movies: {
			one: 'American Ninja',
			two: 'Hulk'
		},
		book: 'Learning JS'
	} 
};*/

/*person.name='Ryan';
person.age=30;*/


//console.log(person);
//console.log(person.name,person.age); // person gives the whole {} but like this returns only name and age

//console.log(person['my favorite movie is'], person.age);

//var objName = person.name;

/*person.name = 'Zen';
person.address = 'Sydney Australia';

delete person.address;

console.log('Has this property? ', person.hasOwnProperty('likes')); //looks for properties

//console.log(objName, person.age);

console.log(person.sayName(), person.age, person.address);
*/

//console.log(person.likes['movies'].two); //get the properties

//______________________________________________________________________________
// JavaScript Operators ++++=============================================

/**
	* unary operators
	* boolean operators - logical ! && ||
	* multiplicative operators  * / %
	* additive operators + - "" number
	* relational operators < > <= >=
	* equality operators == === != !==
	* conditional operators - ternary operators
	* assignment operators
	* comma operators
*/

//________________________________________
// * UNARY OPERATORS +++++++++++++++++++++

/* age++; // postfix = 31

console.log(age);

var age2 = 30;
--age2; //prefix = 29

console.log(age2);

//conversion
var str1 = "01";
var str2 = "1.1";
var str3 = "zzz";

str1 = +str1;
console.log(str1);

str1 = +str2;
console.log(str2);

str1 = +str3;
console.log(str3);

str1 = -str1;
console.log(str1);

str1 = -str2;
console.log(str2);

str1 = -str3;
console.log(str3); */

//______________________________________________
// * BOOLEAN OPERATORS ++++++++++++++++++++++++++

/*alert(!false); // ! = opposite; (! = is not)
alert(!!false);// not false, not true*/

// var result = true && "Hello World"; // is false insead of true, prints only false(end of the line)
// console.log(result);

// var result = true || false; // like + + + = +, + + - = +, - + - = -
// console.log(result);

//_______________________________________________
// * MULTIPLICATIVE OPERATORS +++++++++++++++++++

// var result = 2 * 10 ; // multiply
// console.log(result);

// var result = 200 / 10 ; // if
// console.log(result);

// var result = 200 % 6 ; // left over
// console.log(result);

//________________________________________________
// * ADDITIVE OPERATORS ++++++++++++++++++++++++++

// var result = 2 + 3; 
// console.log(result);

// var name = "Ryan";
// var age = 30;

// var sentence = "My name is " +name+ ' and my age is ' + age; // toString()
// console.log(sentence);

// var num1 = 10;
// var num2 = '10';
// var total = num1 + num2;//String()

// console.log(total); // adds numbers as strings

// var num1 = 10;
// var num2 = '1';
// var total = num1 - num2; // Number()

// console.log(total);

//_______________________________________________
// * RELATIONAL OPERATORS +++++++++++++++++++++++

// var result = 10 < 20;
// console.log(result); // true

// var result = 10 > 20;
// console.log(result); // false

// var result = 10 <= 10;
// console.log(result); // true

//  var result = 10 >=11; 
//  console.log(result); // false


// var result = "Brick" <  "alphabet" ; 
// console.log(result);

// when 2 strings are compared they are compared based on the unicode.
// even with number in the string

//____________________________________________________
// * EQUALITY OPERATORS ++++++++++++++++++++++++++++

// console.log('1' == 1); // true
// console.log( 1 != 1); // false
// console.log(false == 0); // true
// console.log(true == 1); // true
// console.log('1' === 1); // false
// console.log(1 !== '1'); // true	


//____________________________________________________
// * CONDITIONAL OPERATORS

// variable = expression ? true : false

// var num1 = 200;
// var num2 = 1000;

// var result = (num1 > num2) ? "That is corrent " : 'That is wrong'; //? = if / : = else (if true of false) 

// console.log(result);

//_____________________________________________________
// * ASSIGNMENT OPERATORS +++++++++++++++++++++++++++++

// var num = 10;
// num = num + 10;

// console.log(num);

// ______________________________________________

// var num = 10;
// num += 10;

// console.log(num);

// ____________________________________________________

// var num = 10;
// num *= 10; // compound assignment operator

// console.log(num);

//__________________________________________________________
// * COMMA OPERATORS +++++++++++++++++++++++++++++++++++++++

// allows more than one operation

/*var name = 'Ryan';
var age = 30;
var address = 'Sydney';*/

// var name = 'Ryan', age = 30, address = 'Sydney';



//________________________________________________________________
// Java Script STATEMENTS ++======================================
//________________________________________________________________

/**
	* if else
	* do while
	* while
	* for
	* for in
	* labeled
	* break continue
	* switch
*/

//_____________________________________________________________________
// * IF/ELSE STATEMENT ++++++++++++++++++++++++++++++++++++++++++++++++

// If statement is a flow-control statement.
// If statement evaluates a given condition ti a Boolean true of false.

// var num = 100;

// // () = condition if true {}=return statement

// if (num < 50) {
// 	alert('Yes it is greater than ' + num);

// } else {
// 	alert ('No it is not!')
// }


// var n = 25;
// if (n >= 26) {
// 	alert('Number is greater or equal to 26')
// } else if ( n <= 24)  { //else if can be as many as you want between if and else statements
// 	alert('Number is smaller of equal to 24') 
// } else {
// 	alert('Number is 25')
// }

//______________________________________________________________________
// * DO/WHILE STATEMENT ++++++++++++++++++++++++++++++++++++++++++++++++

// do-while statement creates a loop that executes a block of code
// at least once, before checking if the condition is true.
// then it will repeat the loop as long as the condition is true.

// var num = 0;
// do {
// 	num++;
// 	console.log('Number: ' , num);
// } while (num  > 10);

//_______________________________________________________________________
// * WHILE STATEMNET ++++++++++++++++++++++++++++++++++++++++++++++++++++

// evaluates the condition, only then code inside the loop executes.

// var num = 0; 

// while (num < 5) {
// 	num++;
// 	console.log('Num: ', num);
// }

//________________________________________________________________________
// FOR (LOOP) STATEMENT ++++++++++++++++++++++++++++++++++++++++++++++++++

// for (varInitialization; condition; postLoopExpression) {statement}

// for ( var i = 0; i < 10; i++  ) { //if i is true it runs the loop ++ to the <
// 	alert(i);
// }

//_________________________________________________________________________
// FOR IN (LOOP) STATEMENT ++++++++++++++++++++++++++++++++++++++++++++++++

// var person = {
// 	name: "Ryan",
// 	age: 30, 
// 	address: 'Sydney'
// };

// for (item in person) {
// 	alert(item);
// }

// ____________________________________________________

// for (item in window) {
// 	console.log(item);
// }

//____________________________________________________________
// * LABELED BREAK CONTINUE STATEMENT ++++++++++++++++++++++++

// i++ = increment

// var num = 0;
// for (var i = 0; i < 10; i++) {
// 	if (i===5) {
// 		break;
// 	}
// 	num++;
// }
// console.log(num);          // BREAK

//__________________________________________

// var num = 0;
// for (var i = 0; i < 10; i++) {
// 	if (i===5) {
// 		continue;
// 	}
// 	num++;
// }
// console.log(num);       // CONTINUE

//__________________________________________

// var num = 0; 

// outerLabel: for (var i = 0; i < 10; i++) { //LABEL
// 	for ( var ii = 0; ii < 10; ii++){
// 		if (i ==5 && ii == 5){
// 			continue outerLabel;    // LABEL
// 		}
// 		num++;
// 	} 
// }
// alert(num);

//__________________________________________________
// * SWITCH STATEMENT ++++++++++++++++++++++++++++++

// each case in switch statement checks if expression is equal to the value
// without break statement, code execution falls through to default case

// var i = 20;

// switch (i) {
// 	case 10:
// 	alert('it is 10');
// 	break;
// 	case 20:
// 	alert( 'it is 20');
// 	break;
// 	default: 
// 	alert('Nothing found');
// }

//____________________________________

// var i = "Hello!";

// switch (i) {
// 	case 'hi':
// 	alert('Hi there!');
// 	break;
// 	case "Hello!":
// 	alert( 'Hello to you too!');
// 	break;
// 	default: 
// 	alert('Nothing found');
// }

//_____________________________________________________________________
// ******* JavaScript FUNCTIONS ***************************************
//_____________________________________________________________________

/**
	* With functions, you can encapsulate statements
	* that can be run everywhere
	* functions can be called with name and arguments with comma
	* not necessary to run a value
	* function stops executing on return statement
	* you have multiple returns
*/

// function total(one, two) {
// 	var totalThis = one + two;
// 	return totalThis;
// }

// var result = total(1, 2);

// alert(result);

//___________ EASYER_____________

// function total(one, two) {
// 	return one + two;
// }

// var result = total(1, 2);

// alert(result);

//__________FUNCTION STOPS____________
// any code under closed return

// function total(one, two) {
// 	return;
// }

// var result = total(1, 2);

// alert(result);

//_____________IN FUNCTION AFTER LAST RETURN ALERT NOT SHOWN_________________

// function nameCheck(name) {
// 	if (name == 'Ryan') {
// 		return 'Hi Ryan';
// 	}else{
// 		return 'I dont know you';
// 	}
// 	alert('asdkfkjsdhfs');

// }

// var result = nameCheck('Isolde');

// alert(result);

//___________________________________________________________________________
// * FUNCTION ARGUMENT +++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
	* arguments are not necessary and can be any data type or none
	* Array like objects represents arguments internally []
	* you can access each argument using bracket notation
	* determine number of arguments using Arraylength property
*/

// function sayHi(){
// 	return name;
// }

// alert(sayHi('Ryan'));

//_____________ARRAY_________________________________________

// function sayHi(name, something, opinion){
// 	return arguments[0] + arguments[1] + arguments[2];
// }

// alert(sayHi('Ryan', " Js functions are great!" , " right?"));

//_____________________ARRAY LENGTH___________________________

function shoping(item1, item2) {
	if (arguments.length >= 2) {
		alert('you are granted 20% discount');
	}else if(arguments.length <=1){
		alert('You are not getting any discount!');
	}
}

// alert(shoping('Milk')); // another message with undefined
shoping('Milk');
