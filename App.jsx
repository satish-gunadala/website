import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function SatishClothStore() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Casual Shirt", price: 999, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Formal Shirt", price: 1299, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Denim Jeans", price: 1599, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Kurta Set", price: 1999, image: "https://via.placeholder.com/200" },
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Satish Cloth Store</h1>
        <div className="hidden md:flex gap-6 text-gray-600">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#shop" className="hover:text-black">Shop</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
        <div className="flex items-center gap-4 relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="cursor-pointer relative group">
            <ShoppingBag className="w-6 h-6 text-gray-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
            {/* Cart Dropdown */}
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                      <button onClick={() => removeFromCart(index)} className="text-red-500">x</button>
                    </div>
                  ))}
                  <hr className="my-2" />
                  <p className="font-bold">Total: ₹{total}</p>
                  <button className="w-full mt-2 bg-indigo-600 text-white py-2 rounded-lg">Checkout</button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center bg-white shadow-md p-4 md:hidden"
        >
          <a href="#home" className="py-2">Home</a>
          <a href="#shop" className="py-2">Shop</a>
          <a href="#about" className="py-2">About</a>
          <a href="#contact" className="py-2">Contact</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="max-w-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Stylish Clothing</h2>
          <p className="text-gray-600 mb-6">Trendy and affordable fashion at Satish Cloth Store. Shop the best styles for every occasion.</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Shop Now</button>
        </motion.div>
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          src="https://via.placeholder.com/400"
          alt="Clothing Banner"
          className="rounded-2xl shadow-lg mt-8 md:mt-0"
        />
      </section>

      {/* Products Section */}
      <section id="shop" className="px-8 py-16">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Collection</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center bg-white">
                <img src={product.image} alt={product.name} className="rounded-xl mb-4" />
                <h4 className="text-lg font-semibold text-gray-700">{product.name}</h4>
                <p className="text-indigo-600 font-bold">₹{product.price}</p>
                <button onClick={() => addToCart(product)} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          Satish Cloth Store is your go-to destination for stylish and affordable clothing. We pride ourselves on offering a wide range of apparel that suits every occasion and every style.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h3>
        <p className="text-gray-600 mb-4">Have questions or want to place an order? Get in touch with us!</p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Email Us</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Satish Cloth Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
//Everything is done using Tailwind CSS and Framer Motion for animations. The store features a responsive navbar, hero section, product grid, cart functionality, and footer.