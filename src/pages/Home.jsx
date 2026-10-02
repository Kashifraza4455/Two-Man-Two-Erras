import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-inner">

          <div className="copy">

            <div className="eyebrow">
              <i />
              A NOVEL BY I.M. CHILAF
            </div>

            <h1>
              Two Man
              <em>Two Erras</em>
            </h1>

            <p>
              A compelling story of two men, two different paths,
              and the choices that shape their worlds.
            </p>

            <div className="actions">

              <Link
                to="/book"
                className="primary"
              >
                Explore The Book
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/story"
                className="link"
              >
                Read The Story
                <ChevronDown size={16} />
              </Link>

            </div>

            <div className="meta">

              <span>
                <small>AUTHOR</small>
                <b>I.M. CHILAF</b>
              </span>

              <span>
                <small>FORMAT</small>
                <b>FICTION / NOVEL</b>
              </span>

              <span>
                <small>EDITION</small>
                <b>FIRST EDITION</b>
              </span>

            </div>

          </div>


          {/* NEW CORRECTED IMAGE */}

          <div className="hero-img">

            <img
              src="/images/book-promo.png"
              alt="Two Man Two Erras by I.M. CHILAF"
            />

            <label>
              TWO MEN · TWO PATHS · ONE CHOICE
            </label>

          </div>

        </div>

      </section>


      <section className="statement">

        <i />

        <p>
          What if one decision created another life?
        </p>

        <i />

      </section>
    </>
  );
}

export default Home;