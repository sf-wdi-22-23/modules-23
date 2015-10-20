## Day 2 - Keeping Things a secret.

####Encryption/Decryption

Public-key cryptography, also known as asymmetric cryptography, is a method of ensuring that data is private and verified when sent from one destination to another.

When we use the term **key** we really refer to a specific mathematical algorithm that converts text, documents, etc. from its original form to unreadable characters and visual garbage, known as **cyphertext**.  

####Public Key Encryption Example.
We have two friends named Alice and Bob.  Alice wants to send Bob a message, however she wants to encrypt her message so that only Bob can decipher and read it.  Bob has provided her and everyone else in the world with a publicly available key that will encrypt her message.  His **public** key that he has distributed encrypts the data in a very particular manner that is impossible to decipher unless you have the matching **private** key. Bob does **not** distribute his private key and keeps it a secret.

When Bob receives the message from Alice, his special **private** key is the only key with the ability to decipher the message that the **public** key encrypts.  It's a two-piece system; there's no way to decrypt a public-key encrypted file unless you have the private key.

 ![](http://www.itgstextbook.com/chapter5-security/public-key-encryption.png)

####Message Authentication
If Bob wants to send Alice a response to make sure he received the message, he can perform the above encryption in reverse.  Bob can encrypt his message with his **private** key and send it off.  It should be noted, however, that anyone with Bob's **public** key can decipher his message.  This is a vulnerability, however Bob only cares about making sure that Alice knows that it was truly Bob that sent this new message.  **Private** key encrypted files can only be decrypted with **public** keys.  Since Bob is diligent about keeping his **private** key guarded, we know hat any message sent with his private key encryption is truly from him.

###Question

How can we ensure that only Alice can read Bob's authentic **private** key encrypted message?


###Keeping passwords truly safe
To keep your passwords difficult for hackers to guess, they will oftentimes 'hash' your original password into a difficult to guess string of letters and numbers.  To 'hash' something in the the encryption world refers to making something unique yet indecipherable.  Once data is hashed, it is impossible to 'un-hash' it.  

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cryptographic_Hash_Function.svg/2000px-Cryptographic_Hash_Function.svg.png)

The website that requires a password stores the hash result rather than your password.  Any guesses why?

Many hackers have assembled **massive** lists of the most commonly used passwords converted into hashes to use when trying to crack password protected accounts.  These are called Rainbow Tables.  These tables reach in excess of 52 Gb of passwords!  Each website uses generally the same hashing method, so the rainbow table became quite dangerous and powerful.

To counter rainbow tables, websites began using a technique called **salting** with the passwords that customers use.  Salting is the act of adding a string to a customer's password THEN hashing the new string.  This makes any table that a hacker has assembled completely useless, as his/her 'evil' hashes don't have the salt included at the time of creation.  This salt string is publicly available, however it only applies to one particular website.  This makes it time-consuming and resource-expensive to try to recreate a rainbow table based on one website with a particular salt.  

![](http://cache.gawkerassets.com/assets/images/17/2011/08/passwords.jpg)

*We can still do our part!  To make it extremely difficult for computers to guess your password, consider using 4 random words strung together.*  
