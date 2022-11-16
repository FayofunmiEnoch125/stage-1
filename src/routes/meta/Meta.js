import React from "react";
import "./Meta.css";
import HERO from "../../image/hero-img_oytycb.svg";
import Footer from "./Footer";
import Header from "./Header";
import MB_token from "../../image/mb-token_xmh7mv.svg";
import Metamask from "../../image/metamask_doqab9.svg";
import Opensea from "../../image/opensea_zxbbhl.svg";
import stars from "../../image/stars.svg";
import section from "../../image/section-img.svg";

import { homeImages } from "../../utilities/homeImages";

function Meta() {
  return (
    <>
      <Header />

      <section className="meta__hero">
        <div className="left">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <form>
            <input type="email" placeholder="Search for location" />
            <button className="searchbox">Search</button>
          </form>
        </div>

        <div className="right">
          <img src={HERO} alt="Hero" loading="lazy" />
        </div>
      </section>

      <section className="meta__tokens">
        <img src={MB_token} alt="MB token" loading="lazy" />
        <img src={Metamask} alt="Metamask" loading="lazy" />
        <img src={Opensea} alt="Opensea" loading="lazy" />
      </section>

      <section className="meta__inspiration">
        <h2>Inspiration for your next adventure</h2>
        <div className="all__items">
          {homeImages.map((item) => {
            const { id, name, price, distance, duration } = item;
            return (
              <article key={id}>
                <img src={`${id}`} alt={name} />
                <div className="top">
                  <span>{name}</span>
                  <span>{price}</span>
                </div>
                <div className="middle">
                  <span>{distance}</span>
                  <span>{duration}</span>
                </div>

                <img src={stars} alt="Five Stars" loading="lazy" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="meta__info">
        <div className="content">
          <div className="text__wrapper">
            <h3>Metabnb NFTs</h3>

            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>

            <button>Learn more</button>
          </div>

          <div className="img__wrapper">
            <img src={section} alt="Info Section" loading="lazy" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Meta;
