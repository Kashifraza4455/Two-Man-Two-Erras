import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Instagram,
  Mail,
  User,
  Facebook,
  Twitter,
  X,
} from "lucide-react";

function Contact() {
  const [formClosed, setFormClosed] = useState(false);

  return (
    <section className="section contact contact-page">

      {/* BACKGROUND */}
      <div
        className="contact-page-bg"
        style={{
          backgroundImage: "url('/images/book-promo.png')",
        }}
      ></div>

      <div className="contact-page-overlay"></div>


      {/* CONTENT */}
      <div className="contact-page-content">

        <div className="contact-grid">

          {/* =====================================
              LEFT CONTENT
              HIDDEN WHEN PAGE OPENS
          ===================================== */}

          <div
            className={`contact-left-content ${
              formClosed ? "contact-content-show" : ""
            }`}
          >

            <div className="label">
              — GET IN TOUCH
            </div>

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
                Author — I.M. CHALIF
              </span>

              <span>
                <BookOpen />
                Two Man Two Erras
              </span>

            </div>


            <div className="social">

              <a
                href="mailto:hello@imchilaf.com"
                aria-label="Email"
              >
                <Mail />
              </a>

              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>

              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>

              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>

            </div>

          </div>


          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <div
            className={`contact-form-wrapper ${
              formClosed
                ? "contact-form-return"
                : "contact-form-popup"
            }`}
          >

            {/* CLOSE BUTTON */}
            {!formClosed && (
              <button
                type="button"
                className="contact-close-button"
                onClick={() => setFormClosed(true)}
                aria-label="Close contact popup"
              >
                <X size={19} />
              </button>
            )}


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

        </div>

      </div>

    </section>
  );
}

export default Contact;