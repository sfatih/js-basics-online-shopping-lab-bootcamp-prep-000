var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.floor(Math.random()*Math.floor(100));
 var cartItem = {itemName:item, itemPrice:price};
 cart.push(cartItem);
 return `${cartItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let string = "In your cart"
  for(let i=0; i < cart.length;i++){
    string += `${cart[i].name}${cart[i].price}`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
