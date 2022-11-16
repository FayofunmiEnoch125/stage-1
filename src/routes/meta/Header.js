import React, { useState } from "react";
import "./Header.css";
import Modal from "./Modal";
import Navbar from "./Navbar";
import LOGO from "../../image/logo-1_lui7b2.svg";

function Header() {
  const [isNavShow, setIsNavShow] = useState(false);
  const [isShow, setIsShow] = useState(false);
  return (
    <header className="meta__header">
      <div className="logo">
        <div>
          <img src={LOGO} alt="Logo 1" />
        </div>
      </div>

      <nav className="right">
        <ul>
          <li>
            <a href="/meta">Home</a>
          </li>
          <li>
            <a href="/meta/place">Place to stay</a>
          </li>
          <li>
            <a href="/">NFTs</a>
          </li>
          <li>
            <a href="/">Community</a>
          </li>
        </ul>

        <span className="connect" onClick={() => setIsShow(!isShow)}>
          Connect Wallet
        </span>
      </nav>

      <span className="menu__button" onClick={() => setIsNavShow(!isNavShow)}>
        Menu
      </span>

      {isNavShow && (
        <Navbar
          isShow={isShow}
          onNavShow={() => setIsNavShow(!isNavShow)}
          onShow={() => setIsShow(!isShow)}
        />
      )}

      {isShow && <Modal onShow={() => setIsShow(!isShow)} />}
    </header>
  );
}

export default Header;
