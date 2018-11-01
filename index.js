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
  if(cart.length!==0){
    let string = "In your cart, you have ";
    
    if(cart.length == 1){
      string += `${cart[0].name} at ${cart[0].price}.`;
      return string;
    }
    for(let i=0; i < cart.length;i++){
      
      if(i != cart.length-1){
        string += `${cart[i].name} at ${cart[i].price}, `
      }else{
        string += `and ${cart[i].name} at ${cart[i].price}.`
      }
    }
    
    return string;
  }else{
    return "Your shopping cart is empty."
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
