import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favurite food here</h2>
        <p>
          Choose from a diverse menu featuring a dellectable array of crafted
          with the finest
        </p>
        <a href="#explore-menu">
          <button className="view-menu">View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
