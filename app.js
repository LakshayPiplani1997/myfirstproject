/*let age = prompt('How old are you?',100);
alert(`You are ${age} years old!`);
let isBoss = confirm("Are you the boss?");
alert(isBoss);
let name = prompt("What is your name?","");
alert(name);
let value = true
alert(typeof value)
value = String(value)
alert(typeof value)
let n = Number("heeelihjhkjnfjnfnkjfnf fjfkjfhf")
alert(n);
let x = 1
x = -x
alert(x)
let str = "this is " + "an Example " + "of String Concatenation";
alert(str)
alert(1+2+'3') //this will print 33
let apples = "2"
let oranges = "3"
alert(apples + oranges)
alert(+apples + +oranges) 
let a = 4,b = 2;
let result = (a+b < 4 ? true : false);
alert(result);
*/
/*for(let i = 1;i<=11;i++)
	if(i%2==0)
		alert(i);
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num)
	*/
/*function showMessage() {
  alert( 'Hello everyone!' );
}
function showThis() {
  alert( 'We are Amazing' );
}


showMessage();
showThis();
*/
/* function showMessage()
{
	let message = "Hello i am a javascript function!";
	alert(message);
}
showMessage();
let message = "hello"; 
alert(message); */
/*function showMessage(from, text) { // arguments: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); 
*/
/* function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}
/*
let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann */
/*
function sum(a,b)
{
	return a + b;
}
let result = sum(1,3);
alert(result); */
/*
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
*/
/*
function min(a,b)
{
	if(a>b)
	{
		return b;
	}
	else
	{
		return a;
	}
}
function max(a,b)
{
	if(a>b)
	{
		return a;
	}
	else
	{
		return b;
	}
}
function pow(a,b)
{
	
let a = prompt("This is a", 18);
let b = prompt("This is b", 20);
c = min(a,b)
d = max(a,b)
alert(d);
alert(c);
*/
/*
function sayHi() {
  alert( "Hello" );
  alert(2+3);
}

alert( sayHi ); */
/*function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello   
*/
/*
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
/*
alert( sum(1, 2) ); // 3 */
/*alert("There will be an error after this message")

[1, 10].forEach(alert)
*/
let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true