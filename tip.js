
// What are the basic steps we need to do to create a tip calculator?

// Declare some Variables: the tip %, the bill total, # of People.
//----Eventually we'll want this as user input
let totalBillAmount = 232.57;
let peopleInGroup = 6;
let percentTip = 45;



// Display the tip, bill total, and amount of people to the screen
console.log(`The total bill you had was: $${totalBillAmount}`)
console.log(`you have a party of ${peopleInGroup} `)
console.log(`The tip is ${percentTip}`)
//--------------------------------------------------------------------------------------------------------------------------------------


// The tip should be (total tip amount of bill)
//The total check should be (the post-tip amount of total bill)
//Each person should pay (the post-tip amount | # of people)

//get the pre-tip bill (the bill total)
//get the tip | bill * ((tip $) / 100))
let tipAmount = totalBillAmount * (percentTip / 100)
console.log(`The total tip is $${tipAmount.toFixed(2)}`);

// get the post-tip bill by getting the pre-tip # plus the tip #
let postTipBill = totalBillAmount + tipAmount;
console.log(`The Total bill is $${postTipBill.toFixed(2))}`);
// divide the post-tip bill by the # of People
let myShareOfTheBill = postTipBill / peopleInGroup;
console.log(`My share of the bill is $${myShareOfTheBill.toFixed(2)}`);



// List the post-tip bill, divided by the number of people.
// for each of these, make sure it rounds to a fixed number of decimal