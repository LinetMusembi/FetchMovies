import React, { useState } from "react";



const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="navbar-lg py-6 bg-orange">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <h1 className="text-4xl ml-10">
  <span className="text-orange">Moovie</span>
  
</h1>

            </div>
            <div className="flex items-center">
              <input className="search px-40 py-1 rounded-full border border-orange text-orange bg-black text-lg focus:outline-none focus:ring focus:border-white-300" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center">
              <ul className="navbar-nav flex items-center gap-8 ml-10">
                <li className="nav-item">
                  <a className="nav-link text-orange text-lg" href="">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-orange text-lg" href="">
                    My List
                  </a>
                </li>
                <li className="nav-item">
                  <button className="bg-yellow-400 text-orange px-4 py-1 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:bg-yellow-300 text-lg mr-20" type="button">
                    <a className="nav-link active text-black text-lg" href="/sign Up">
                      Sign Up
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

