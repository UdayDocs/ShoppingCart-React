import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>© 2025 ShopCart. Built with React</p>
        <a
          href="https://github.com/UdayDocs/ShoppingCart-React"
          target="_blank"
          rel="no-referrer"
          className="github-link"
        >
          <FaGithub className="github-icon" />
          Uday
        </a>
      </div>
    </footer>
  );
}