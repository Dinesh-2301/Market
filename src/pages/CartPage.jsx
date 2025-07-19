import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // 👈 React Router hook
import styles from "../styles/CartPage.module.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // 👈 For programmatic routing

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + (item.discountPrice || item.price) * (item.quantity || 1),
    0
  );

  return (
    <div className={styles.cartPage}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                    {item.name}
                  </td>
                  <td>${(item.discountPrice || item.price).toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, e.target.value)
                      }
                      className={styles.quantityInput}
                    />
                  </td>
                  <td>
                    $
                    {(
                      (item.discountPrice || item.price) * item.quantity
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.cartTotals}>
            <h3>Cart Totals</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Total: ${subtotal.toFixed(2)}</p>
            <button
              className={styles.checkoutBtn}
              onClick={() => navigate("/checkout")}
            >
              Proceed to checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
