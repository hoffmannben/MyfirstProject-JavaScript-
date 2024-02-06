const input = require('sync-input');
let bubblegum= 202;
let toffee = 118;
let iceCream=2250;
let milkChocolate=1680;
let doughnut=1075;
let pancake=80;
let sum= pancake+doughnut+milkChocolate+iceCream+toffee+bubblegum;
console.log(`Earned amount:
Bubblegum: $202
Toffee: $118
Ice cream: $2250
Milk chocolate: $1680
Doughnut: $1075
Pancake: $80
`);
console.log(`Income: $${sum}`);
let staff =input("Staff expenses:");
let otherExpenses = input("Other expenses:");
let totalSum = sum-staff-otherExpenses;
console.log(`Net income: $${totalSum}`);
