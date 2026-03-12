// iv. payment.js - Payment processing
//                           import { reduceStock } from './product.js';
//                           import { getCartItems, getCartTotal, clearCart } from './cart.js';
//                           import { applyDiscount } from './discount.js';
                          
//                           // TODO: Implement these functions
                          
//                           export function processPayment(paymentMethod, couponCode = null) {
//                             // 1. Get cart items and total
//                             // 2. Apply discount if coupon provided
//                             // 3. Validate payment method (card/upi/cod)
//                             // 4. Process payment (simulate)
//                             // 5. Reduce stock for all items
//                             // 6. Clear cart
//                             // 7. Generate order summary
                            
//                             // Return order summary:
//                             // {
//                             //   orderId: ...,
//                             //   items: [...],
//                             //   subtotal: ...,
//                             //   discount: ...,
//                             //   total: ...,
//                             //   paymentMethod: ...,
//                             //   status: 'success/failed',
//                             //   message: '...'
//                             // }
//                           }
                          
//                           export function validatePaymentMethod(method) {
//                             // Check if method is valid (card/upi/cod)
//                           }
                          
//                           function generateOrderId() {
//                             // Generate random order ID
//                             return 'ORD' + Date.now();
//                           }

import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {

  const items = getCartItems();
  const subtotal = getCartTotal();

  if (items.length === 0) {
    return { status: "failed", message: "Cart is empty" };
  }

  const discountResult = applyDiscount(subtotal, couponCode, items);

  const finalTotal = discountResult.finalTotal;

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  // Reduce stock
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // Clear cart
  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountResult.discount,
    total: finalTotal,
    paymentMethod,
    status: "success",
    message: "Payment successful"
  };
}

export function validatePaymentMethod(method) {

  const methods = ['card', 'upi', 'cod'];

  return methods.includes(method);
}

function generateOrderId() {
  return 'ORD' + Date.now();
}