import React, { useState } from "react";
import { placesImages } from "../utilities/placeImages";
import { filterTypes } from "../utilities/filterTypes";
import Footer from "../routes/meta/Footer";
import Header from "../routes/meta/Header";
import Location from "../image/location-icon_pe63ri.svg";
import stars from "../image/stars.svg";

function Places() {
  const [filterText, setFilterText] = useState("");
  return (
    <>
      <Header />

      <section className="meta__inspiration">
        <div className="meta__filter">
          <ul>
            {filterTypes.map((item) => {
              return (
                <li key={item} onClick={() => setFilterText(item)}>
                  {item}
                </li>
              );
            })}

            <li onClick={() => setFilterText("")}>
              <img
                src={Location}
                alt="Location Icon"
                width={150}
                loading="lazy"
              />
            </li>
          </ul>
        </div>

        <div className="all__items">
          {filterText === ""
            ? placesImages.map((item) => {
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

                    <img src={stars} alt="Five Stars" />
                  </article>
                );
              })
            : placesImages
                .filter((item) => item.type === filterText)
                .map((item) => {
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

                      <img src={stars} alt="Five Stars" />
                    </article>
                  );
                })}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Places;
