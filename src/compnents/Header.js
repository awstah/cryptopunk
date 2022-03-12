import React from "react";
import Logo from "../assets/cryptopunk-logo.png";
import Search from "../assets/search.png";
import ThemeSwitch from "../assets/theme-switch.png";

function Header() {
  return (
    <div className="h-20 flex items-center p-2 md:p-5 space-x-2">
      <div>
        <img src={Logo} alt="cryptopunk" className="w-auto h-16" />
      </div>

      <div className="flex-1 flex items-center bg-gray-900 h-12 rounded-lg shadow-gray-700 px-2">
        <img src={Search} alt="search" className="w-auto h-8" />
        <input
          type="text"
          placeholder="Collection, Nft, Items and Users ..."
          className="w-full h-full bg-transparent px-3 text-gray-500 outline-none"
        />
      </div>
      <div className="md:flex space-x-3 hidden">
        <h4 className="text-gray-500 text-sm">Drop</h4>
        <h4 className="text-gray-500 text-sm">Marketplace</h4>
        <h4 className="text-gray-500 text-sm">Create</h4>

        <img
          src={ThemeSwitch}
          alt="switch"
          className="w-auto h-7 cursor-pointer"
        />
      </div>

      <button className="bg-gradient-to-l from-teal-700 to-teal-500 px-3 py-2 rounded-full text-black">
        GET IN
      </button>
    </div>
  );
}

export default Header;
