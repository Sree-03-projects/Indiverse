import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartModal from "../pages/shop/productDetails/CartModal"; // Ensure correct path

const Navbar = () => {
  const products = useSelector((state) => state.cart?.products || []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
    document.body.style.overflow = isCartOpen ? "auto" : "hidden";
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <header className='fixed-nav-bar w-full bg-white shadow-md'>
      <nav className='max-w-screen-2xl mx-auto px-6 flex items-center justify-between py-4'>

        {/* Navigation Links */}
        <ul className='nav__links flex gap-x-6 flex-1'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/">Pages</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Logo */}
        <div className='nav_logo flex-1 text-center text-2xl font-bold'>
          <Link to="/">Indiverse<span className="text-primary">.</span></Link>
        </div>

        {/* Icons Section - Search -> Cart -> Profile */}
        <div className='nav_icons flex items-center gap-x-6 flex-1 justify-end'>

          {/* 🔍 Search Icon */}
          <button onClick={handleSearchClick} className='hover:text-primary'>
            <i className="ri-search-line text-lg"></i>
          </button>

          {/* 🛒 Cart Icon */}
          <button onClick={handleCartToggle} className="relative hover:text-primary">
            <i className="ri-shopping-bag-line text-lg"></i>
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {products.length}
              </span>
            )}
          </button>

          {/* 👤 Profile Icon */}
          <button className='hover:text-primary'>
            <i className="ri-user-line text-lg"></i>
          </button>

        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle} />}
    </header>
  );
};

export default Navbar;
