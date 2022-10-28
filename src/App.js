import React from "react";
import "./App.css";
import { RiMoreLine } from "react-icons/ri";
import { RiShareForwardLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import AVTR1 from "./image/avatar1.jpg";

function App() {
  return (
    <>
      <br></br>
      <br></br>
      <section className="profile">
        <div className="share">
          <RiShareForwardLine />
        </div>
        <div className="more">
          <RiMoreLine />
        </div>

        <div id="profile__img">
          <img src={AVTR1} alt="Akingbade Fayofunmi" />
        </div>

        <p> Akingbade Fayofunmi </p>
        <p id="slack"> fayotheVillain </p>
      </section>
      <section className="link">
        <button id="twitter">
          <a
            href="https://twitter.com/thegreatkidfayo"
            target="_blank"
            rel="noreferrer"
          >
            Twitter Link
          </a>
        </button>
        <button id="btn__zuri">
          <a
            href="https://training.zuri.team/"
            target="_blank"
            rel="noreferrer"
          >
            Zuri Team
          </a>
        </button>
        <button id="books">
          <a href="http://books.zuri.team/" target="_blank" rel="noreferrer">
            Zuri Books
          </a>
        </button>
        <button id="book__python">
          <a href="https://books.zuri.team/" target="_blank" rel="noreferrer">
            Python Books
          </a>
        </button>
        <button id="pitch">
          <a
            href="https://background.zuri.team/"
            target="_blank"
            rel="noreferrer"
          >
            Background Check for Coders
          </a>
        </button>
        <button id="book__design">
          <a
            href="https://training.zuri.team/"
            target="_blank"
            rel="noreferrer"
          >
            Design Books
          </a>
        </button>
      </section>
    </>
  );
}

export default App;
