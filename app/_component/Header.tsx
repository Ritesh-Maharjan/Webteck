import React from "react";

const Header = () => {
  return (
    <header className="h-12 flex items-center sticky top-0 bg-[#7A58FF]">
      <div className="max-w-screen-xl w-full mx-auto flex justify-between items-center p-2">
        <h1>LOGO</h1>

        <nav>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Service</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>

        <button>Start a Project</button>
      </div>
    </header>
  );
};

export default Header;
