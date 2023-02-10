import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Tooltip from "../../assistance/tooltip/Tooltip";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <Tooltip
        href="#home"
        className="menu-item"
        tooltipClassName="menu-item-tooltip"
        anchorText="Home"
        value="Go to the Home page"
      />
    </p>
    <p>
      <Tooltip
        href="#possibility"
        className="menu-item"
        tooltipClassName="menu-item-tooltip"
        anchorText="Open AI"
        value="Explore the Possibilities"
      />
    </p>
    <p>
      <Tooltip
        href="#features"
        className="menu-item"
        tooltipClassName="menu-item-tooltip"
        anchorText="Case Studies"
        value="Explore the Features"
      />
    </p>
    <p>
      <Tooltip
        href="#blog"
        className="menu-item"
        tooltipClassName="menu-item-tooltip"
        anchorText="Library"
        value="See what's going on"
      />
    </p>
  </>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
