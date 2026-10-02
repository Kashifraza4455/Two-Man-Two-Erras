import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Story() {
  return (
 <section className="story-page">

      {/* Background Image */}
      <div className="story-page-bg"></div>

      {/* Dark Overlay */}
      <div className="story-page-overlay"></div>

      {/* Content */}
      <div className="story-page-content">

        {/* Left Side */}
        <div className="story-page-left">

          <div className="label">
            THE STORY
          </div>

          <h1>
            The story behind
            <br />
            <em>the book.</em>
          </h1>

        </div>

        {/* Right Side */}
        <div className="story-page-right">

          <p>
            <strong>Two Man Two Erras</strong> explores how two lives can move
            in completely different directions while beginning from the same
            world.
          </p>

          <p>
            It is a story about human choices, ambition, relationships,
            mistakes and the quiet consequences that follow us long after a
            decision has been made.
          </p>

          <Link to="/themes" className="story-discover">
            Discover The Themes
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Story;