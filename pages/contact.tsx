import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css";
import "../app/styles/styles.css";

import EmailForm from "../utils/Form";

const ContactPage = () => {
  return (
    <div id="contact" className="mobile-contact">
      <Navbar />
      <div
        className="max-container picture-height"
        style={{
          position: "relative",
          width: "100%",
          height: "40vh",
          overflow: "hidden",
        }}
      >
        <img
          src="/contact.jpg"
          alt="contact"
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-40">
        <div className="flex">
          <div className="mx-20 custom-images ">
            <h1 className="regular-40 bold-32 mr-10 mb-10">
              ČESTO POSTAVLJENA PITANJA
            </h1>
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
          </div>

          <EmailForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
