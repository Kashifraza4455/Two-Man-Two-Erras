import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Story from "./pages/Story";
import Themes from "./pages/Themes";
import Author from "./pages/Author";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="site">

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/story" element={<Story />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/author" element={<Author />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>

          <div>
            <div className="brand">
              I.M <b>CHILAF</b>
            </div>

            <p>Two Man Two Erras</p>

            <small>
              A story that stays with you.
            </small>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/book">The Book</a>
            <a href="/story">The Story</a>
            <a href="/themes">Themes</a>
            <a href="/author">Author</a>
            <a href="/contact">Contact</a>
          </div>

          <small>
            © 2026 I.M. CHILAF. All rights reserved.
          </small>

        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;