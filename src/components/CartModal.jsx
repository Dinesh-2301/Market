// src/components/CartModal.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CartModal.module.css";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.discountPrice || item.price),
    0
  );

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Your Cart</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className={styles.cartItems}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>${(item.discountPrice || item.price).toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>
        <div className={styles.cartFooter}>
          <p>Total: ${total.toFixed(2)}</p>
          <div className={styles.actions}>
            <Link to="/cart">
              <button onClick={onClose}>Go to Cart</button>
            </Link>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
