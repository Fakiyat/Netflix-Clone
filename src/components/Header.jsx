import React from "react";
import "./Header.css"; // Linking the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#tv-shows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#my-list">My List</a>
      </div>
    </header>
  );
};

export default Header;
