import React, { useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";
import LOGO from "../../image/logo-1_lui7b2.svg";

function Header() {
  const [isNavShow, setIsNavShow] = useState(false);
  const [isShow, setIsShow] = useState(false);
  return (
    <header className="meta__header">
      <div className="logo">
        <img src={LOGO} alt="Logo 1" width={180} loading="lazy" />
      </div>

      <nav className="right">
        <ul>
          <li>
            <a href="/meta">Home</a>
          </li>
          <li>
            <a href="/place">Place to stay</a>
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

      <button className="menu__button" onClick={() => setIsNavShow(!isNavShow)}>
        Menu
      </button>

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
