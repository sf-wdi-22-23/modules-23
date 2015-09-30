# Control Flow Lab

## Instructions

1. Create a new file for each exercise.
1. Test your code for exercise 1 by running the file with `node sing.js` or by copying and pasting your code into the Chrome dev console.
1. Test your code for the exercises that require `prompt` in the browser, since the `prompt` method is only available in the browser!

##Exercise 1: Sing!

Hint: Be mindful of infinite loops. They will crash your browser! 

2. Write code that console logs the "Bottles of beer on the wall" song:

		5 bottles of beer on the wall,
		5 bottles of beer!
		Take one down and pass it around,
		4 bottles of beer on the wall!


  * How would you fix "1 bottles of beer"?
  * How would you change "0" to "No more"?
  * Use a JavaScript `prompt` to ask the user how many verses they want to hear.

###Exercise 2: Login

4. Create a `userLogin` object with one key for a user's name and one key for the user's password. Just make up a user name and password.  Write code that prompts the user for their password with a message customized to the user. For example, if the user name you created is `octocat_rules`, the message should be `"Enter password for user octocat_rules."`

5. Extend your previous code to check whether the password the user gives matches the password in the `userLogin` object. The code should communicate whether the passwords matched to the user with console logs or JavaScript `alert`.

Bonus: Modify your user login to give the user three chances to enter the correct password. 

###Stretch Exercise: Security Questions

1. Create an array called `securityQuestions`. Each element of `securityQuestions` will be an object with two keys: `question` and `expectedAnswer`.

1. Populate (fill) `securityQuestions` with at least three such objects. Feel free to just make them up. For example, one security question object might be:     
	```
	{ question: "What was your first pet's name?", expectedAnswer: "FlufferNutter" }
	```


1. Write code that goes through each of the security questions doing the following:   
  * prompt the user with the question    
  * check whether the user's input matches the expected answer    
  		* if the answer does match, ask the next question
  		* if the answer doesn't match, stop asking questions and pop up an alert message.
