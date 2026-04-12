        //   v. app.js - Main application
        //                 import { 
        //                   getAllProducts, 
        //                   searchProducts, 
        //                   getProductsByCategory 
        //                 } from './product.js';
                        
        //                 import { 
        //                   addToCart, 
        //                   getCartItems, 
        //                   getCartTotal, 
        //                   updateQuantity,
        //                   removeFromCart 
        //                 } from './cart.js';
                        
        //                 import { processPayment } from './payment.js';
                        
        //                 console.log('=== E-Commerce Store ===\n');
                        
        //                 // 1. Browse products
        //                 console.log('All Products:');
        //                 console.log(getAllProducts());
                        
        //                 // 2. Search for products
        //                 console.log('\nSearching for "phone":');
        //                 console.log(searchProducts('phone'));
                        
        //                 // 3. Add items to cart
        //                 console.log('\n=== Adding to Cart ===');
        //                 console.log(addToCart(1, 2));  // 2 Laptops
        //                 console.log(addToCart(3, 3));  // 3 Headphones
        //                 console.log(addToCart(1, 1));  // 1 more Laptop (should update quantity)
                        
        //                 // 4. View cart
        //                 console.log('\n=== Current Cart ===');
        //                 console.log(getCartItems());
        //                 console.log('Cart Total:', getCartTotal());
                        
        //                 // 5. Update quantity
        //                 console.log('\n=== Updating Quantities ===');
        //                 console.log(updateQuantity(1, 2));  // Change laptop quantity to 2
                        
        //                 // 6. Remove item
        //                 console.log('\n=== Removing Item ===');
        //                 console.log(removeFromCart(3));  // Remove headphones
                        
        //                 // 7. View updated cart
        //                 console.log('\n=== Updated Cart ===');
        //                 console.log(getCartItems());
        //                 console.log('Cart Total:', getCartTotal());
                        
        //                 // 8. Checkout with coupon
        //                 console.log('\n=== Checkout ===');
        //                 const order = processPayment('upi', 'WELCOME10');
        //                 console.log(order);
import { getAllProducts, searchProducts } from './product.js';
import { addToCart, getCartItems, getCartTotal, removeFromCart, updateQuantity } from './cart.js';
import { processPayment } from './payment.js';

// Step 1: Show all products
console.log("------ PRODUCT CATALOG ------");
console.log(getAllProducts());


// Step 2: Search a product
console.log("\n------ SEARCH RESULT (phone) ------");
console.log(searchProducts("phone"));


// Step 3: Add products to cart
console.log("\n------ ADDING TO CART ------");

console.log(addToCart(1, 1)); // Laptop
console.log(addToCart(3, 2)); // Headphones
console.log(addToCart(4, 3)); // Mouse


// Step 4: Show cart items
console.log("\n------ CART ITEMS ------");
console.log(getCartItems());


// Step 5: Update quantity
console.log("\n------ UPDATE QUANTITY ------");
updateQuantity(3, 3); // Headphones quantity updated


// Step 6: Remove item
console.log("\n------ REMOVE ITEM (Mouse) ------");
removeFromCart(4);


// Step 7: Show cart again
console.log("\n------ UPDATED CART ------");
console.log(getCartItems());


// Step 8: Show cart total
console.log("\n------ CART TOTAL ------");
console.log("Total:", getCartTotal());


// Step 9: Process payment with coupon
console.log("\n------ PROCESS PAYMENT ------");

const order = processPayment("upi", "WELCOME10");

console.log(order);