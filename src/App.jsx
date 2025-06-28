import React, { useState, useEffect } from 'react';
import './App.css'; 

import woodyImage from './assets/woody.jpg';
import floralImage from './assets/floral.jpg';
import menSuitImage from './assets/men-suit.jpg';
import africanDressImage from './assets/african-dress.jpg';
import strollerImage from './assets/baby-stroller.jpg';
import babyClothesImage from './assets/newborn-clothes.jpg';
import walkerImage from './assets/baby-walker.jpg';
import mensShirtImage from './assets/mens-shirt.jpg';
import tshirtImage from './assets/mens-tshirt.jpg';
import shortsImage from './assets/khaki-shorts.jpg';
import boxersImage from './assets/mens-boxers.jpg';
import walletImage from './assets/wallet.jpg';
import braImage from './assets/strapless-bra.jpg';
import undergarmentsImage from './assets/undergarments.jpg';
import sundressImage from './assets/sun-dress.jpg';
import vitengeImage from './assets/vitenge.jpg';
import jeansImage from './assets/official-jeans.jpg';
import toteImage from './assets/tote-bag.jpg';
import slingImage from './assets/sling-bag.jpg';
import accessoriesImage from './assets/accessories.jpg';

const sampleProducts = [
  { 
    id: 1, 
    name: 'Woody Scent',
    price: 1200, 
    image: woodyImage 
  },
  { 
    id: 2, 
    name: 'Floral Perfume',
    price: 1500, 
    image: floralImage 
  },
  { 
    id: 3, 
    name: "Men's Suit", 
    price: 3500, 
    image: menSuitImage 
  },
  { 
    id: 4, 
    name: "Ladies' African Dress", 
    price: 2800,
    image: africanDressImage 
  },
  { 
    id: 5, 
    name: 'Baby Stroller',
    price: 5000,
    image: strollerImage 
  },
  { 
    id: 6, 
    name: "Newborn Baby Clothes Set",
    price: 2200, 
    image: babyClothesImage 
  },
  { 
    id: 7, 
    name: "Baby Walker",
    price: 4500,
    image: walkerImage 
  },
  { 
    id: 8, 
    name: "Men's Casual Shirt",
    price: 1700, 
    image: mensShirtImage 
  },
  { 
    id: 9, 
    name: "Men's Summer T-shirt",
    price: 1200,
    image: tshirtImage 
  },
  { 
    id: 10, 
    name: "Men's Khaki Shorts", 
    price: 1600, 
    image: shortsImage 
  },
  { 
    id: 11, 
    name: "Men's Boxers", 
    price: 1000,
    image: boxersImage 
  },
  { 
    id: 12, 
    name: "Men's Wallet",
    price: 800, 
    image: walletImage 
  },
  { 
    id: 13, 
    name: "Ladies' Strapless Bra", 
    price: 900, 
    image: braImage 
  },
  { 
    id: 14, 
    name: "Undergarments Set",
    price: 1300, 
    image: undergarmentsImage 
  },
  { 
    id: 15, 
    name: "Sun Dress", 
    price: 2000, 
    image: sundressImage 
  },
  { 
    id: 16, 
    name: "Vitenge Dress",
    price: 2500,
    image: vitengeImage 
  },
  { 
    id: 17, 
    name: "Official Jeans (Ladies)", 
    price: 1800,
    image: jeansImage 
  },
  { 
    id: 18, 
    name: "Tote Bag", 
    price: 1100,
    image: toteImage 
  },
  { 
    id: 19, 
    name: "Sling Bag", 
    price: 950, 
    image: slingImage 
  },
  { 
    id: 20, 
    name: "Accessories Set",
    price: 1500, 
    image: accessoriesImage 
  },
];

function LuxeShop() {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const generateWhatsAppMessage = () => {
    const orderDetails = cart.map(item => `${item.name} - KES ${item.price} x ${item.quantity}`).join('\n');
    const total = calculateTotal();
    return `Order Details:\n${orderDetails}\nTotal: KES ${total}`;
  };

  return (
    <div className="shop-container">
      <header className="nav-header">
        <nav className="navbar">
          <div className="brand">LUXE</div>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Dark Mode' : '☀ Light Mode'}
          </button>
        </nav>
      </header>

      <section className="hero-section">
        <h1>LUXE PERFUME AND WEARS</h1>
        <p>Fragrances and quality outfits for men, women, and babies. Delivered free within Nairobi CBD!</p>
      </section>

      <section className="product-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {sampleProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p>KES {product.price}</p>
              <button onClick={() => addToCart(product)} className="add-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="cart-section">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>No items in cart yet.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - KES {item.price} x {item.quantity}</li>
              ))}
            </ul>
            <p className="total">Total: KES {calculateTotal()}</p>
            <a
              href={`https://wa.me/254799757915?text=${encodeURIComponent(generateWhatsAppMessage())}`}
              target="_blank"
              rel="noreferrer"
              className="order-button"
            >
              WhatsApp Order
            </a>
          </>
        )}
      </section>

      <footer className="info-section">
        <h3>Visit or Contact Us 📍</h3>
        <p><strong>Location:</strong> Family Bank Building second floor,<br />Riverroad, Nairobi</p>
        <p><strong>Open Daily:</strong> 8:00 AM to 5:00 PM</p>
        <a href="mailto:kelvinkmwangi07@gmail.com" className="contact-button">Email Us</a>
      </footer>
    </div>
  );
}

export default LuxeShop;
