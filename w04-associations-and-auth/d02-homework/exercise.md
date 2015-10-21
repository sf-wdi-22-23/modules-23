# BCrypt By Itself

This exercise will use bcrypt in a simple JS document without being a part of an express app, or connected to any database. This will demostrate that bcrypt is a single responsibility module that hashes passwords, and isn't any more complicated than that. 

1. In your dev or week-4 folder on your computer, create a file bcrypt_by_itself.js
2. require (and npm install) bcrypt
3. In bcrypt_by_itself assign an empty object to the variable 'user'
4. assign a password of your choosing to the variable 'password'
5. Implement bcrypt's genSalt and hash functions which should
  1. Add salt to your password
  1. hash the salted password
  1. save the hash as a password property on the user object
  1. console.log the user object so you can see your beautifully un-guessable hashed password
  1. return the user object, now containing the hashed password. 

