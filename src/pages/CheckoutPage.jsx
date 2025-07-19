import React from "react";
// src/pages/CheckoutPage.jsx
import styles from "../styles/CheckoutPage.module.css";
const CheckoutPage = () => {
  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.checkoutHeading}>Billing Details</h2>
      <form className={styles.checkoutForm}>
        <div>
          <label>First name *</label>
          <input type="text" required />
        </div>
        <div>
          <label>Last name *</label>
          <input type="text" required />
        </div>
        <div>
          <label>Company name</label>
          <input type="text" />
        </div>
        <div>
          <label>Country / Region *</label>
          <select>
                      <option>United States (US)</option>
                      <option value="">Select a country</option>
  <option value="US">United States (US)</option>
  <option value="IN">India</option>
  <option value="GB">United Kingdom</option>
  <option value="CA">Canada</option>
  <option value="AU">Australia</option>
  <option value="DE">Germany</option>
  <option value="FR">France</option>
  <option value="JP">Japan</option>
  <option value="CN">China</option>
  <option value="ZA">South Africa</option>
  <option value="BR">Brazil</option>
  <option value="RU">Russia</option>
          </select>
        </div>
        <div>
          <label>Street address *</label>
          <input type="text" placeholder="House number and street name" required />
          <input type="text" placeholder="Apartment, suite, unit (optional)" />
        </div>
        <div>
          <label>Town / City *</label>
          <input type="text" required />
        </div>
        <div>
          <label>State *</label>
          <select>
            <option>Alaska</option>
          </select>
        </div>
        <div>
          <label>ZIP Code *</label>
          <input type="text" required />
        </div>
        <div>
          <label>Phone *</label>
          <input type="tel" required />
        </div>
        <div>
          <label>Email address *</label>
          <input type="email" required />
        </div>
        <div>
          <label>
            <input type="checkbox" /> Create an account?
          </label>
        </div>
        <div>
          <label>Order notes (optional)</label>
          <textarea placeholder="Notes about your order..." />
        </div>

        {/* Order Summary Placeholder
        <div className={styles.orderSummary}>
          <h3>Your Order</h3>
          <p>Items from cart...</p>
          <p>Total: ₹xxx.xx</p>
        </div> */}

        <button className={styles.placeOrderBtn}>Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
