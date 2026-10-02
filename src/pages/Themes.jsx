import React from "react";

function Themes() {
  return (
    <section className="cinematic-themes">

      <div className="cinematic-themes-bg">

        <div className="cinematic-book-image"></div>

        <div className="cinematic-red-light"></div>

        <div className="cinematic-dark-overlay"></div>

      </div>


      <div className="cinematic-themes-header">

        <div className="cinematic-label">
          <span></span>
        THE THEMES
        </div>

        <p>
          Four forces. One story.
        </p>

      </div>


      <div className="cinematic-themes-content">

        <div className="cinematic-themes-left">

          <div className="cinematic-big-number">
            03
          </div>

          <div className="cinematic-vertical-text">
            TWO MAN / TWO ERRAS
          </div>

        </div>


        <div className="cinematic-themes-center">

          <div className="cinematic-center-line"></div>

          <div className="cinematic-main-title">
            <span>WHAT LIES</span>
            <em>BENEATH</em>
          </div>

          <div className="cinematic-description">

            <p>
              Every story has something beneath the surface.
              These are the forces that shape the world of
              <strong> Two Man / Two Erras.</strong>
            </p>

          </div>

        </div>


        <div className="cinematic-themes-list">

          <div className="cinematic-theme-item active">

            <span className="theme-index">
              01
            </span>

            <div>
              <span className="theme-kicker">
                THE BOND
              </span>

              <h3>
                Friendship
              </h3>

              <p>
                The bond that begins everything.
              </p>
            </div>

            <span className="theme-arrow">
              ↗
            </span>

          </div>


          <div className="cinematic-theme-item">

            <span className="theme-index">
              02
            </span>

            <div>
              <span className="theme-kicker">
                THE HUNGER
              </span>

              <h3>
                Ambition
              </h3>

              <p>
                The desire to become more.
              </p>
            </div>

            <span className="theme-arrow">
              ↗
            </span>

          </div>


          <div className="cinematic-theme-item">

            <span className="theme-index">
              03
            </span>

            <div>
              <span className="theme-kicker">
                THE BREAK
              </span>

              <h3>
                Betrayal
              </h3>

              <p>
                When trust becomes a weapon.
              </p>
            </div>

            <span className="theme-arrow">
              ↗
            </span>

          </div>


          <div className="cinematic-theme-item">

            <span className="theme-index">
              04
            </span>

            <div>
              <span className="theme-kicker">
                THE PRICE
              </span>

              <h3>
                Consequences
              </h3>

              <p>
                Every choice leaves something behind.
              </p>
            </div>

            <span className="theme-arrow">
              ↗
            </span>

          </div>

        </div>

      </div>


      <div className="cinematic-themes-bottom">

        <div className="bottom-word">
          CHOICE
        </div>

        <div className="bottom-line"></div>

        <div className="bottom-word">
          CHANGE
        </div>

        <div className="bottom-line"></div>

        <div className="bottom-word active">
          CONSEQUENCE
        </div>

      </div>

    </section>
  );
}

export default Themes;