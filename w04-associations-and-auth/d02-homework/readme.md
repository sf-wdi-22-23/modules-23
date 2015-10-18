## Day 2 Homework

## A Couple Quick Logistics

### Soon you will deploying to the web! 
![Bilby Stampede](http://33.media.tumblr.com/db649f4441940d7fcbbc2bd5d6646bc1/tumblr_mlj0syTLbP1rf1e3ro1_250.gif)


To do so we will be using a fabulous service called Heroku. Heroku lets you deploy up to five apps to there servers for FREEEEEE as long as activity on the app is quite low. Its a perfect platform for deploying apps for learning and early development. 

#### Head to [Heroku](www.heroku.com) and create an account. 

We will also be deploying our databases to the web! For this we need another service. Mongolab has a free "Sandbox" service where we can test things out.

#### Head to [MongoLab](mongolab.com/plans) and sign up for your free sandbox plan.

##### ATTN: You will need to enter credit card information, but the services are free. At no time will GA ask you to do anything requiring you to spend any money on either of these services. However, if your amazing app starts getting a lot of activity that is amazing! Also, it's your job to keep an eye on your accounts and know if and when you will get billed.

## Review BCrypt

### BCrypt, and password encryption in general is very important stuff. Take some time to review todays lesson. 

### Here are some additional resources about BCrypt:
- [This Lynda video about bcrypt](http://www.lynda.com/Express.js-tutorials/Implementing-strong-password-hashing-bcrypt/191940/375525-4.html)
- [The BCrypt Express Readme](https://github.com/ncb000gt/node.bcrypt.js/)
	- If you are wondering what the heck 'B4c0/\/' is, it is the example password they are using. 
- [This blog post about using bcrypt with mongoose & express](http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt)

## Do the Exercise

### This exercise will use bcrypt in a simple JS document without being a part of an express app, or connected to any database. This will demostrate that bcrypt is a single responsibility module that hashes passwords, and isn't any more complicated than that. 

1. In your dev or week-4 folder on your computer, create a file bcrypt_by_itself.js
2. require (and npm install) bcrypt
3. assign an empty object to the variable 'user'
4. assign a password of your choosing to the variable 'password'
5. Implement bcrypt's genSalt and hash functions which should
	a. Add salt to your password
	b. hash the salted password
	c. save the hash as a password property on the user object
	d. console.log the user object so you can see the your beautifully un-guessable hashed password
	e. return the user object, now containing the hashed password. 

