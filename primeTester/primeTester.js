/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
<<<<<<< HEAD
	var x=2;
    if (x && x<Math.sqrt(x)){
    	if (n%x!==0){
    		return true;
    		x++;
    	}
    	return false;
    }
};


var primeTester = function(n){
	var x;
	typeof x === 'number';
	while(x>=2 && x<= Math.sqrt(x)){
		if(n%x!==0){
			return true;
		}
		return false;
	}
};

//not reaching if or while statements :/

=======
  // to do
};

>>>>>>> 41ca4f541867a5e438506ca07b5cff54d5b8a7f0
 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
  // to do
};
