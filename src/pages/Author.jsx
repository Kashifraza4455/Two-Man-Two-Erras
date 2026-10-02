import React from "react";

function Author() {
  return (
    <section className="author author-page">

      <div className="section author-grid">

        <div className="author-img">

          {/* NEW CORRECTED IMAGE */}

          <img
            src="/images/book-promo.png"
            alt="I.M. CHILAF"
          />

          <b>
            I.M
            <br />
            <span>CHILAF</span>
          </b>

        </div>


        <div>

          <div className="label">
            — THE AUTHOR
          </div>

          <h2>
            I.M. <em>CHILAF</em>
          </h2>

          <p className="intro">
            A storyteller with a vision, I.M. CHILAF
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
            I.M. CHILAF
          </div>

        </div>

      </div>

    </section>
  );
}

export default Author;