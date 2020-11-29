
 var first = prompt("What is your first name?");
 var last = prompt("what is your last name?");
 var age = prompt("what is your age?");

 console.log("My name is "+first+" "+last);
 console.log("I am "+age+" years old.");


var age = prompt("Enter your age?");
var days = age*365;
alert(age+" Years is roughly "+days+" days");


var secretNumber = 5;
var guess = Number(prompt("Guess a number"));

if(secretNumber === guess){
	alert("Yeah, Got the number!");
}
else if(secretNumber > guess){
	alert("Too Low, Guess Again.");
}
else{
	alert("Too High, Guess Again.");
}

console.log("Print all number between -10 and 19.");
var num = -10;
while(num <= 19){
	console.log(num);
	num++;
}

console.log("Print all even number between 10 and 40.");
var num = 10;
while(num <= 40){
	if(num % 2 === 0){
		console.log(num);
	}
	num++;
}

console.log("Print all odd number between 300 and 333.");
var num = 300;
while(num <= 333){
	if(num % 2 !== 0){
		console.log(num);
	}
	num++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50.");
var num = 5;
while(num <= 50){
	if(num % 5 === 0 && num % 3 === 0){
		console.log(num);
	}
	num++;
}


while(prompt("Are we there yet?") !== "Yes"){

}
alert("Yay, we finally made it!");

var answer = prompt("Are we there yet?");
while(answer.indexOf("yes") === -1){
	answer = prompt("Are we there yet?");
}
alert("Yay, we finally made it!");



console.log("Print all number between -10 and 19.");
for(var num = -10; num <= 19; num++){
	console.log(num);
}
console.log("Print all even number between 10 and 40.");
for(var num = 10; num <= 40; num++){
	if(num % 2 === 0){
		console.log(num);
	}
}

console.log("Print all odd number between 300 and 333.");
for(var num = 300; num <= 333; num++){
	if(num % 2 !== 0){
		console.log(num);
	}
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50.");
for(var num = 5; num <= 50; num++){
	if(num % 5 === 0 && num % 3 === 0){
		console.log(num);
	}
}

