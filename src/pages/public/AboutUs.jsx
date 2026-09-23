import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import "./AboutUs.css";
export default function AboutUs() {
  return <><PageHero title="About Us" subtitle="Discover the history, identity, vision and institutional framework of MKJK Mahavidyalaya."/>
<main className="landing-page page-scope-aboutus">
<div className="container">
<div className="landing-intro">
  <span className="eyebrow">MKJK</span>
  <h2>About Us</h2>
  <p>Discover the history, identity, vision and institutional framework of MKJK Mahavidyalaya.</p>
  </div>
<div className="landing-cards">
  <Link to="/about/history" className="landing-card">
  <span className="landing-num">01</span>
  <h3>History</h3>
  
 <span>Explore →</span>
 </Link>
 <Link to="/about/our-college" className="landing-card">
 <span className="landing-num">02</span>
 <h3>Our College</h3>
 <span>Explore →</span>
 </Link>
 <Link to="/about/our-inspiration" className="landing-card">
 <span className="landing-num">03</span>
 <h3>Our Inspiration</h3>
 <span>Explore →</span>
 </Link>
 <Link to="/about/objectives" className="landing-card">
 <span className="landing-num">04</span>
 <h3>Objectives</h3>
 <span>Explore →</span>
 </Link>
 <Link to="/about/vision-mission" className="landing-card">
 <span className="landing-num">05</span>
 <h3>Vision & Mission</h3>
 <span>Explore →</span>
 </Link>
 <Link to="/about/governing-body" className="landing-card">
 <span className="landing-num">06</span>
 <h3>Governing Body</h3>
 <span>Explore →</span>
 </Link>
 </div>
 </div>
 </main>
 </>
}
