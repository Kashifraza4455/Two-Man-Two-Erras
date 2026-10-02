import React from "react";
import {
  ArrowRight,
  BookOpen,
  Instagram,
  Mail,
  User,
Facebook,
  Twitter
} from "lucide-react";

function Contact() {
  return (
<section className="section contact contact-page">

  <div className="label">
    — GET IN TOUCH
  </div>

  <div className="contact-grid">

    <div>

      <h2>
        Have questions?
        <br />
        <em>Let's talk.</em>
      </h2>

      <p>
        Whether you want to know more about the book,
        discuss the story, or simply send a message,
        get in touch.
      </p>

      <div className="info">

        <span>
          <Mail />
          hello@imchilaf.com
        </span>

        <span>
          <User />
          Author — I.M. CHILAF
        </span>

        <span>
          <BookOpen />
          Two Man Two Erras
        </span>

      </div>

      <div className="social">

        {/* Email */}
        <a
          href="mailto:hello@imchilaf.com"
          aria-label="Email"
        >
          <Mail />
        </a>

        {/* Instagram */}
        <a
          href="#"
          aria-label="Instagram"
        >
          <Instagram />
        </a>

        {/* Facebook */}
        <a
          href="#"
          aria-label="Facebook"
        >
          <Facebook />
        </a>

        {/* Twitter / X */}
        <a
          href="#"
          aria-label="Twitter"
        >
          <Twitter />
        </a>

      </div>

    </div>

    <form
      onSubmit={(e) => e.preventDefault()}
    >

      <label>
        Your Name

        <input
          placeholder="Enter your name"
        />
      </label>

      <label>
        Your Email

        <input
          type="email"
          placeholder="Enter your email"
        />
      </label>

      <label>
        Your Message

        <textarea
          rows="5"
          placeholder="Write your message..."
        />
      </label>

      <button className="primary">
        Send Message
        <ArrowRight size={17} />
      </button>

    </form>

  </div>

</section>
  );
}

export default Contact;