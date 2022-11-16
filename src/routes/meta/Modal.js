import React from "react";
import Cancel from "../../image/cancel.svg";
import Meta_img from "../../image/meta-img_sw1zlc.svg";
import Wallet from "../../image/wallet-connect_vsfwpx.svg";
import FowardArrow from "../../image/forward-arrow.svg";

function Modal({ onShow }) {
  return (
    <section className="meta__overlay" onClick={onShow}>
      <div className="meta__modal">
        <div className="top">
          <h2>Connect Wallet</h2>
          <img
            src={Cancel}
            alt="Cancel Icon"
            style={{ cursor: "pointer" }}
            onClick={onShow}
          />
        </div>

        <hr />

        <div className="bottom">
          <p>Choose your preferred wallet:</p>

          <article>
            <p>
              <img src={Meta_img} alt="Meta logo" loading="lazy" />
              <span> Metamask</span>
            </p>
            <img src={FowardArrow} alt="Forward arrow" />
          </article>

          <article>
            <p>
              <img src={Wallet} alt="Connect Wallet logo" loading="lazy" />
              <span> Wallet Connect</span>
            </p>
            <img src={FowardArrow} alt="Forward arrow" />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Modal;
