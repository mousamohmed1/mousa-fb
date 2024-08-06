import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 موسى. جميع الحقوق محفوظة.</p>
      <div>
        <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">تيليجرام</a>
        <a href="https://facebook.com/username" target="_blank" rel="noopener noreferrer">فيسبوك</a>
        <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">إنستاجرام</a>
      </div>
    </footer>
  );
};

export default Footer;
