import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Book() {
  return (
    <section className="section book-page">

      {/* CINEMATIC BACKGROUND */}
      <div className="book-background">
        <div className="book-background-image"></div>
        <div className="book-background-overlay"></div>
      </div>


      <div className="label">
        — THE BOOK
      </div>


      <div className="grid book">

        {/* BOOK IMAGE */}

        <div className="picture">

          <img
            src="/images/book-promo.png"
            alt="Two Man Two Erras by I.M. CHALIF"
          />

          <span>
            TWO MAN / TWO ERRAS
          </span>

        </div>


        <div>

          <h2>
            A story built around{" "}
            <em>two different paths.</em>
          </h2>

          <p>
            Two men. Two choices. Two versions of what life
            could become. The story moves through the spaces
            between ambition, friendship, consequence and
            the decisions we cannot take back.
          </p>


          <div className="features">

            {[
              [
                "01",
                "Choice",
                "Every path begins with a decision.",
              ],
              [
                "02",
                "Consequence",
                "Every decision leaves something behind.",
              ],
              [
                "03",
                "Identity",
                "Who we become is shaped by the roads we take.",
              ],
            ].map((item) => (

              <div
                className="feature"
                key={item[0]}
              >

                <small>
                  {item[0]}
                </small>

                <div>
                  <b>{item[1]}</b>
                  <span>{item[2]}</span>
                </div>

              </div>

            ))}

          </div>


          <Link
            to="/contact"
            className="outline"
          >
            Ask About The Book
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Book;