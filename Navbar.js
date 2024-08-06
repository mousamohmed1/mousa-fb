import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <Link to="#gallery">معرض الصور</Link>
        <Link to="#services">خدماتي</Link>
        <Link to="#works">أعمالي</Link>
        <Link to="#challenges">تحديات</Link>
        <Link to="#chat">دردشة</Link>
        <Link to="#contact">اتصل بي</Link>
      </div>
    </nav>
  );
};

export default Navbar;
