import React from "react";
//isVisible is a boolean that determines if the header should be visible
const Header = ({ isVisible }: { isVisible: boolean }) => {
	//TODO: add animation to the header to match section BG 
  return (
    <header className={`h-auto flex items-center sticky top-0 bg-transparent backdrop-blur-lg ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center p-2">
        <div className="flex items-center gap-2">
          <img src="/img/home-page/WebTeck-Transparent-logo.png" alt="logo" className="h-14" />
          <div className="text-white text-lg">
            <p>Vancouver</p>
            <p>WebTeck</p>
          </div>
        </div>

        <nav>
          <ul className="flex gap-4 text-white">
            <li>Home</li>
            <li>Service</li>
						{/* i think we need to include dropdown for better ui nav to services page singles */}
            <li>Pricing</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>

        <button className="rounded-3xl border py-3 px-6 font-bold text-white border-[#CDCDCD]">Start a Project</button>
      </div>
    </header>
  );
};

export default Header;
