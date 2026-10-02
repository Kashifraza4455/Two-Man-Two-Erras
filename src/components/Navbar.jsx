import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const nav = [
  ["Home", "/"],
  ["The Book", "/book"],
  ["The Story", "/story"],
  ["Themes", "/themes"],
  ["Author", "/author"],
  ["Contact", "/contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="nav">

        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          I.M <b>CHALIF</b>
        </Link>

        <nav className={open ? "open" : ""}>

          {nav.map(([title, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
            >
              {title}
            </Link>
          ))}

          <Link
            to="/contact"
            className="cta"
            onClick={() => setOpen(false)}
          >
            Get Your Copy
            <ArrowRight size={15} />
          </Link>

        </nav>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;