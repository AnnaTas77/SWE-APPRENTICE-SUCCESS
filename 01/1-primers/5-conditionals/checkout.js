//Challenge: Checkout Order Details - Arithmetic
/*
  1. We have 3 variables to store an item price. The last price 2 items
  were ordered (multiplication)
  2. Tell the user what the total price is before discount.
  3. Inform the user what the average price of items is before discount.
  4. Inform them the final price after saving 5 dollars with promo code:
  "I got 5 on it".
  
  */
// Given the `totalPrice` and `amtInWallet`, set `balance` to
// the amount of money left in the wallet after checkout.
var totalPrice = 25;
var amtInWallet = 20;
// modify this variable
var balance = null;
// YOUR CODE HERE
balance = amtInWallet - totalPrice;
console.log('Current balance: ', balance);
