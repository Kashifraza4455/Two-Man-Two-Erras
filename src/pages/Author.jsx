import React from "react";

function Author() {
  return (
    <section className="author author-page">

      {/* Background Image */}
      <div
        className="author-page-bg"
        style={{
          backgroundImage: "url('/images/book-promo.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="author-page-overlay"></div>


      <div className="section author-grid">

        <div className="author-img">

          {/* BOOK IMAGE */}

          <img
            src="/images/book-promo.png"
            alt="I.M. CHALIF"
          />

          <b>
            I.M
            <br />
            <span>CHALIF</span>
          </b>

        </div>


        <div className="author-content">

          <div className="label">
            — THE AUTHOR
          </div>

          <h2>
            I.M. <em>CHALIF</em>
          </h2>

          <p className="intro">
            A storyteller with a vision, I.M. CHALIF
            crafts powerful narratives that explore
            the human mind, choices, and the paths
            we take.
          </p>

          <p>
            Through <i>Two Man Two Erras</i>, the author
            presents a world where choices matter and
            every road can lead somewhere unexpected.
          </p>

          <div className="signature">
            I.M. CHALIF
          </div>

        </div>

      </div>

    </section>
  );
}

export default Author;