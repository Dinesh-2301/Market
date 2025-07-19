
import React, { useState } from "react";
import styles from "../styles/ShopPage.module.css";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartModal from "../components/CartModal";

// ✅ Product data
const products = [
  {
    id: 1,
    name: "Organic Carrot",
    category: "Vegetable, Root",
    price: 8,
    discountPrice: 5,
    image: "https://static.vecteezy.com/system/resources/previews/030/663/871/large_2x/carrots-with-transparent-background-high-quality-ultra-hd-free-photo.jpg",
  },
  {
    id: 2,
    name: "Fresh Strawberry",
    category: "Fruit, Organic",
    price: 12,
    discountPrice: null,
    image: "https://www.hanilufarms.com/wp-content/uploads/2019/12/p11.jpg",
  },
  {
    id: 3,
    name: "Corn",
    category: "Grain, Organic",
    price: 10,
    discountPrice: 7,
    image: "https://3.imimg.com/data3/GH/QI/MY-11765206/corn.jpg",
  },
  {
    id: 4,
    name: "Red Bell Pepper",
    category: "Vegetable, Fresh",
    price: 9,
    discountPrice: 6,
    image: "https://www.shutterstock.com/image-photo/fresh-vegetables-three-sweet-red-260nw-270503105.jpg",
  },
  {
    id: 5,
    name: "Green Cabbage",
    category: "Leafy Veg",
    price: 7,
    discountPrice: 5,
    image: "https://t4.ftcdn.net/jpg/00/69/19/09/360_F_69190946_dO9NYtUPGwAcKBR3pzeuwNkQy9bRCDbg.jpg",
  },
  {
    id: 6,
    name: "Tomato",
    category: "Vegetable, Juicy",
    price: 6,
    discountPrice: 4,
    image: "https://img.freepik.com/free-psd/juicy-red-tomato-with-water-droplets_191095-79653.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 7,
    name: "Green Apple",
    category: "Fruit, Fresh",
    price: 11,
    discountPrice: 8,
    image: "https://img.lovepik.com/photo/60213/3499.jpg_wh860.jpg",
  },
  {
    id: 8,
    name: "Bitter Gourd",
    category: "Vegetable, Healthy",
    price: 5,
    discountPrice: 3,
    image: "https://png.pngtree.com/png-clipart/20240723/original/pngtree-fresh-bitter-gourd-vegetable-png-image_15615092.png",
  },
  {
    id: 9,
    name: "Pumpkin",
    category: "Vegetable, Seasonal",
    price: 10,
    discountPrice: 6,
    image: "https://media.istockphoto.com/id/1058023252/photo/pumpkin-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=VYFBd-A2d-zPNP4DWPMz-PUBIDP96cQUHqyq15-TOaA=",
  },
  {
    id: 10,
    name: "Capsicum",
    category: "Vegetable, Fresh",
    price: 7,
    discountPrice: 4,
    image: "https://t4.ftcdn.net/jpg/02/66/68/37/360_F_266683754_wzx9XxeNXKudct2Q3qwQf1PvVaQaKOf6.jpg",
  },
  {
    id: 11,
    name: "Green Pepper",
    category: "Vegetable, Spicy",
    price: 5,
    discountPrice: 3,
    image: "https://img.freepik.com/premium-photo/fresh-green-pepper-isolated-white-background_185193-19729.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 12,
    name: "Potato",
    category: "Vegetable, Root",
    price: 4,
    discountPrice: 2,
    image: "https://www.shutterstock.com/image-photo/potato-on-white-background-260nw-132427382.jpg",
  },
  {
    id: 13,
    name: "Red Apple",
    category: "Fruit, Fresh",
    price: 6,
    discountPrice: 4,
    image: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
  },
  {
    id: 14,
    name: "Sweet Orange",
    category: "Fruit, Citrus",
    price: 9,
    discountPrice: 6,
    image: "https://t3.ftcdn.net/jpg/06/14/68/28/360_F_614682801_dksYs38EILRYWZv53rGKUijTQ05BUnyN.jpg",
  },
];

const ShopPage = () => {
  const { addToCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <div className={styles.shopContainer}>
      {/* Cart Icon */}
      <div className={styles.cartIconTopRight} onClick={toggleCart}>
        <ShoppingCart size={24} />
      </div>

      {/* Modal */}
      {showCart && <CartModal onClose={toggleCart} />}

      {/* Product Cards */}
      {products.map((product) => (
        <div className={styles.productCard} key={product.id}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <div className={styles.productInfo}>
            <p className={styles.productCategory}>{product.category}</p>
            <h3 className={styles.productName}>{product.name}</h3>
            <div className={styles.productPricing}>
              {product.discountPrice ? (
                <>
                  <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
                  <span className={styles.discountPrice}>${product.discountPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className={styles.price}>${product.price.toFixed(2)}</span>
              )}
            </div>
            <button className={styles.addToCartBtn} onClick={() => addToCart(product)}>
              <ShoppingCart size={16} style={{ marginRight: "6px" }} />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
