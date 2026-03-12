// ii. cart.js - Shopping cart operations
//   import { getProductById, checkStock } from './product.js';
                          
//                           let cartItems = [];
                          
//                           // TODO: Implement these functions
                          
//                           export function addToCart(productId, quantity) {
//                             // 1. Get product details
//                             // 2. Check stock availability
//                             // 3. Check if product already in cart
//                             //    - If yes, update quantity
//                             //    - If no, add new item
//                             // 4. Return success/error message
//                           }
                          
//                           export function removeFromCart(productId) {
//                             // Remove product from cart
//                           }
                          
//                           export function updateQuantity(productId, newQuantity) {
//                             // Update quantity of product in cart
//                             // Check stock before updating
//                           }
                          
//                           export function getCartItems() {
//                             // Return all cart items with product details
//                           }
                          
//                           export function getCartTotal() {
//                             // Calculate total price of all items in cart
//                             // Return total
//                           }
                          
//                           export function clearCart() {
//                             // Empty the cart
//                           }
import { getProductById, checkStock } from './product.js';

let cartItems = [];

// Add item to cart
export function addToCart(productId, quantity) {

  const product = getProductById(productId);

  if (!product) {
    return { message: "Product not found" };
  }

  if (!checkStock(productId, quantity)) {
    return { message: "Not enough stock available" };
  }

  const existingItem = cartItems.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({
      productId,
      quantity
    });
  }

  return { message: "Product added to cart" };
}

// Remove item
export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
}

// Update quantity
export function updateQuantity(productId, newQuantity) {

  if (!checkStock(productId, newQuantity)) {
    return { message: "Not enough stock" };
  }

  const item = cartItems.find(item => item.productId === productId);

  if (item) {
    item.quantity = newQuantity;
  }
}

// Return cart items with product details
export function getCartItems() {

  return cartItems.map(item => {

    const product = getProductById(item.productId);

    return {
      ...product,
      quantity: item.quantity
    };
  });
}

// Calculate total
export function getCartTotal() {

  let total = 0;

  cartItems.forEach(item => {
    const product = getProductById(item.productId);
    total += product.price * item.quantity;
  });

  return total;
}

// Clear cart
export function clearCart() {
  cartItems = [];
}