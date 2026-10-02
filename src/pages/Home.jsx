import React from "react";
import {
  ArrowRight,
  ChevronDown,
  BookOpen,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="hero">

        {/* Cinematic Background */}
        <div className="hero-background">
          <div className="hero-background-image"></div>
          <div className="hero-background-overlay"></div>
        </div>

        <div className="hero-inner">

          <div className="copy">

            <div className="eyebrow">
              <i />
              A NOVEL BY I.M. CHALIF
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
                <b>I.M. CHALIF</b>
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

          <div className="hero-img">

            <img
              src="/images/book-promo.png"
              alt="Two Man Two Erras by I.M. CHALIF"
            />

            <label>
              TWO MEN · TWO PATHS · ONE CHOICE
            </label>

          </div>

        </div>

      </section>


      {/* ================= STATEMENT ================= */}

      <section className="statement">

        <i />

        <p>
          What if one decision created another life?
        </p>

        <i />

      </section>


      {/* ================= SECTION 02 — THE BOOK ================= */}

      <section className="home-book-section">

        <div className="home-book-bg">
          <div className="home-book-bg-image"></div>
          <div className="home-book-bg-overlay"></div>
        </div>

        <div className="home-book-content">

          <div className="home-book-image">

            <div className="home-book-image-glow"></div>

            <img
              src="/images/book-promo.png"
              alt="Two Man Two Erras"
            />

            <span>
              I.M. CHALIF
            </span>

          </div>


          <div className="home-book-copy">

            <div className="home-section-label">
              <span></span>
              THE BOOK
            </div>

            <h2>
              Two lives.
              <br />
              <em>One turning point.</em>
            </h2>

            <p className="home-book-intro">
              Two Man Two Erras takes you into a world where
              friendship, ambition and difficult choices begin
              to pull two lives in different directions.
            </p>

            <p>
              What begins with connection slowly becomes a journey
              through decisions, consequences and the paths people
              choose when life stops being simple.
            </p>

            <Link
              to="/book"
              className="home-text-link"
            >
              Discover The Book
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= SECTION 03 — THE JOURNEY ================= */}

      <section className="home-journey-section">

        <div className="home-journey-top">

          <div>
            <div className="home-section-label">
              <span></span>
              THE JOURNEY
            </div>

            <h2>
              Every choice
              <br />
              leaves a <em>mark.</em>
            </h2>
          </div>

          <p>
            Behind every path lies a decision.
            Behind every decision lies a consequence.
            These are the forces that move the story forward.
          </p>

        </div>


        <div className="home-journey-grid">

          {/* CARD 01 */}

          <div className="home-journey-card">

            <div className="journey-card-number">
              01
            </div>

            <div className="journey-card-icon">
              <Sparkles size={21} />
            </div>

            <div className="journey-card-content">

              <small>
                THE BEGINNING
              </small>

              <h3>
                Choice
              </h3>

              <p>
                Every journey begins with a moment where
                one decision changes everything that follows.
              </p>

            </div>

            <div className="journey-card-line"></div>

          </div>


          {/* CARD 02 */}

          <div className="home-journey-card">

            <div className="journey-card-number">
              02
            </div>

            <div className="journey-card-icon">
              <GitBranch size={21} />
            </div>

            <div className="journey-card-content">

              <small>
                THE PATH
              </small>

              <h3>
                Direction
              </h3>

              <p>
                Two people can begin in the same place
                and still find themselves walking different roads.
              </p>

            </div>

            <div className="journey-card-line"></div>

          </div>


          {/* CARD 03 */}

          <div className="home-journey-card">

            <div className="journey-card-number">
              03
            </div>

            <div className="journey-card-icon">
              <BookOpen size={21} />
            </div>

            <div className="journey-card-content">

              <small>
                THE AFTERMATH
              </small>

              <h3>
                Consequence
              </h3>

              <p>
                No choice disappears completely.
                Some decisions stay with us long after the moment passes.
              </p>

            </div>

            <div className="journey-card-line"></div>

          </div>

        </div>


        <div className="home-journey-bottom">

          <span>
            TWO MEN
          </span>

          <i></i>

          <span>
            TWO PATHS
          </span>

          <i></i>

          <span className="active">
            ONE CHOICE
          </span>

        </div>

      </section>


      {/* ================= FINAL HOME CTA ================= */}

      <section className="home-final-section">

        <div className="home-final-bg"></div>
        <div className="home-final-overlay"></div>

        <div className="home-final-content">

          <div className="home-section-label">
            <span></span>
            ENTER THE STORY
          </div>

          <h2>
            Some stories are
            <br />
            <em>read.</em>
            <br />
            Others are remembered.
          </h2>

          <Link
            to="/story"
            className="primary home-final-button"
          >
            Enter The Story
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;