import React from "react";
import "./Home.css";
import { RiMoreLine } from "react-icons/ri";
import { RiShareForwardLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";
import AVTR1 from "../image/avatar1.jpg";
const Home = () => {
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

        <div id="profile__img" className="Avatar__img">
          <img src={AVTR1} alt="Akingbade Fayofunmi" />
        </div>

        <p> fayotheVillain </p>
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
        <button id="contact">
          <a href="/contact">Contact Me</a>
        </button>

        <br></br>
        <p>
          <a
            id="icon"
            href="https://github.com/FayofunmiEnoch125"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>

          <a
            id="icon"
            href="https://mail.zuri.team/l/1sw892IMOS9B69KON7AsFDQw/Tf7fWUnd763Xz1DsvpVMzLLQ/YUHM7P7OdX5hgAPlCp0Rsg"
            target="_blank"
            rel="noreferrer"
          >
            <BsSlack />
          </a>
        </p>
      </section>
      <br></br>
      <br></br>
    </>
  );
};

export default Home;
