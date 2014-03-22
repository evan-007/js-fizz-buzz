$(document).ready(function(){

	var fizzBuzz = function (limit) {
		console.log(limit)
		for (var num = 1; num < limit; num++) 
		{
			if (num % 15 === 0) {
				$('body').append("<p>FizzBuzz</p>")
			}
			else if (num % 3 === 0) {
				$('body').append("<p>Fizz</p>")
			}
			else if (num % 5 === 0) {
				$('body').append("<p>Buzz</p>")
			}
			else {
				$('body').append("<p>"+num+"</p>")
			}
			
		}
	}

	var tryAgain = function() {
		alert("That's not a whole number");
	}

    var loop = function () {
    	var startingNumber = prompt("Enter any whole number");
    	if (isNaN(startingNumber)) {
    		tryAgain()
    		loop()
    	}
    	else if (+startingNumber % 1 != 0) {
    		tryAgain()
    		loop()
    	}
    	else {
    		fizzBuzz(+startingNumber)
    	}
	}

	loop()
});