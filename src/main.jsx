import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowRight, BookOpen, ChevronDown, Instagram, Mail, Menu, Quote, User, X } from 'lucide-react';
import './App.css';
const nav = [['Home', 'home'], ['The Book', 'book'], ['The Story', 'story'], ['Themes', 'themes'], ['Author', 'author'], ['Contact', 'contact']];
function App() {
    const [open, setOpen] = useState(false); const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }; return <div className="site">
        <header><div className="nav"><button className="brand" onClick={() => go('home')}>I.M <b>CHILAF</b></button><nav className={open ? 'open' : ''}>{nav.map(([t, id]) => <button key={id} onClick={() => go(id)}>{t}</button>)}<button className="cta" onClick={() => go('contact')}>Get Your Copy <ArrowRight size={15} /></button></nav><button className="menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
        <main>
            <section className="hero" id="home">
            <div className="hero-inner">
            <div className="copy">
            <div className="eyebrow"><i /> A NOVEL BY I.M. CHILAF</div>
            <h1>Two Man<em>Two Erras</em></h1>
            <p>A compelling story of two men, two different paths, and the choices that shape their worlds.</p>
            <div className="actions">
            <button className="primary" onClick={() => go('book')}>Explore The Book <ArrowRight size={17} />
            </button><button className="link" onClick={() => go('story')}>Read The Story <ChevronDown size={16} /></button></div>
            <div className="meta"><span><small>AUTHOR</small><b>I.M. CHILAF</b></span><span><small>FORMAT</small><b>FICTION / NOVEL</b></span><span><small>EDITION</small><b>FIRST EDITION</b></span></div></div><div className="hero-img"><img src="/images/book-promo.jpg" alt="Two Man Two Erras book promo" /><label>TWO MEN · TWO PATHS · ONE CHOICE</label></div></div></section>
            <section className="statement"><i /><p>What if one decision created another life?</p><i /></section>
            <section className="section" id="book"><div className="label">01 — THE BOOK</div><div className="grid book"><div className="picture"><img src="/images/book-promo.jpg" alt="Two Man Two Erras" /><span>TWO MAN / TWO ERRAS</span></div><div><h2>A story built around <em>two different paths.</em></h2><p>Two men. Two choices. Two versions of what life could become. The story moves through the spaces between ambition, friendship, consequence and the decisions we cannot take back.</p><div className="features">{[['01', 'Choice', 'Every path begins with a decision.'], ['02', 'Consequence', 'Every decision leaves something behind.'], ['03', 'Identity', 'Who we become is shaped by the roads we take.']].map(x => <div className="feature" key={x[0]}><small>{x[0]}</small><div><b>{x[1]}</b><span>{x[2]}</span></div></div>)}</div><button className="outline" onClick={() => go('contact')}>Ask About The Book <ArrowRight size={16} /></button></div></div></section>
            <section className="story" id="story"><div className="story-bg" /><div className="section story-inner"><div className="label">02 — THE STORY</div><div className="story-grid"><h2>The story behind<br /><em>the book.</em></h2><div><p><strong>Two Man Two Erras</strong> explores how two lives can move in completely different directions while beginning from the same world.</p><p>It is a story about human choices, ambition, relationships, mistakes and the quiet consequences that follow us long after a decision has been made.</p><button className="link" onClick={() => go('themes')}>Discover The Themes <ArrowRight size={16} /></button></div></div></div></section>
<section className="cinematic-themes" id="themes">

  {/* Background */}
  <div className="cinematic-themes-bg">
    <div className="cinematic-book-image"></div>
    <div className="cinematic-red-light"></div>
    <div className="cinematic-dark-overlay"></div>
  </div>

  {/* Top label */}
  <div className="cinematic-themes-header">
    <div className="cinematic-label">
      <span></span>
      03 — THE THEMES
    </div>

    <p>
      Four forces. One story.
    </p>
  </div>

  {/* Main content */}
  <div className="cinematic-themes-content">

    {/* Left */}
    <div className="cinematic-themes-left">

      <div className="cinematic-big-number">
        03
      </div>

      <div className="cinematic-vertical-text">
        TWO MAN / TWO ERRAS
      </div>

    </div>

    {/* Center */}
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

    {/* Right */}
    <div className="cinematic-themes-list">

      <div className="cinematic-theme-item active">
        <span className="theme-index">01</span>

        <div>
          <span className="theme-kicker">
            THE BOND
          </span>

          <h3>Friendship</h3>

          <p>
            The bond that begins everything.
          </p>
        </div>

        <span className="theme-arrow">↗</span>
      </div>


      <div className="cinematic-theme-item">
        <span className="theme-index">02</span>

        <div>
          <span className="theme-kicker">
            THE HUNGER
          </span>

          <h3>Ambition</h3>

          <p>
            The desire to become more.
          </p>
        </div>

        <span className="theme-arrow">↗</span>
      </div>


      <div className="cinematic-theme-item">
        <span className="theme-index">03</span>

        <div>
          <span className="theme-kicker">
            THE BREAK
          </span>

          <h3>Betrayal</h3>

          <p>
            When trust becomes a weapon.
          </p>
        </div>

        <span className="theme-arrow">↗</span>
      </div>


      <div className="cinematic-theme-item">
        <span className="theme-index">04</span>

        <div>
          <span className="theme-kicker">
            THE PRICE
          </span>

          <h3>Consequences</h3>

          <p>
            Every choice leaves something behind.
          </p>
        </div>

        <span className="theme-arrow">↗</span>
      </div>

    </div>

  </div>


  {/* Bottom */}
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
            <section className="author" id="author"><div className="section author-grid"><div className="author-img"><img src="/images/book-promo.jpg" alt="I.M. Chilf" /><b>I.M<br /><span>CHILAF</span></b></div><div><div className="label">04 — THE AUTHOR</div><h2>I.M. <em>CHILAF</em></h2><p className="intro">A storyteller with a vision, I.M. Chilf crafts powerful narratives that explore the human mind, choices, and the paths we take.</p><p>Through <i>Two Man Two Erras</i>, the author presents a world where choices matter and every road can lead somewhere unexpected.</p><div className="signature">I.M. CHILAF</div></div></div></section>
            <section className="quote"><div><Quote size={25} /></div><blockquote>Sometimes the road we leave behind tells us as much as the road ahead.</blockquote><cite>— I.M. CHILAF</cite></section>
            <section className="section contact" id="contact"><div className="label">05 — GET IN TOUCH</div><div className="contact-grid"><div><h2>Have questions?<br /><em>Let's talk.</em></h2><p>Whether you want to know more about the book, discuss the story, or simply send a message, get in touch.</p><div className="info"><span><Mail />hello@imchilf.com</span><span><User />Author — I.M. Chilf</span><span><BookOpen />Two Man Two Erras</span></div><div className="social"><a href="mailto:hello@imchilf.com"><Mail /></a><a href="#contact"><Instagram /></a></div></div><form onSubmit={e => e.preventDefault()}><label>Your Name<input placeholder="Enter your name" /></label><label>Your Email<input type="email" placeholder="Enter your email" /></label><label>Your Message<textarea rows="5" placeholder="Write your message..." /></label><button className="primary">Send Message <ArrowRight size={17} /></button></form></div></section>
        </main><footer><div><button className="brand">I.M <b>CHILAF</b></button><p>Two Man Two Erras</p><small>A story that stays with you.</small></div><div className="footer-links">{nav.slice(1).map(([t, id]) => <button key={id} onClick={() => go(id)}>{t}</button>)}</div><small>© 2026 I.M. CHILAF. All rights reserved.</small></footer></div>
}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
