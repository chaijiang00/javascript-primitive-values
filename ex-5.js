//Exercise #5: Shopping and Discount

// Start coding here
let totalPrice = 27000;
let productDis = 25;
let discount = `${(totalPrice*productDis)/100}`;
let netPrice = totalPrice-discount;
let discountMessage="Discount = ";
let netPriceMessage="Net Price = ";
console.log(discountMessage+discount);
console.log(netPriceMessage+netPrice);