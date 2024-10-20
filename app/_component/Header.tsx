import React from "react";

const Header = () => {
  return (
    <header className="h-12 flex items-center">
      <div className="max-w-screen-xl w-full mx-auto flex justify-between items-center p-2">
        <h1>LOGO</h1>

        <nav>
          <ul className="flex gap-4">
            <li>Flow</li>
            <li>Works</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </nav>

        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
