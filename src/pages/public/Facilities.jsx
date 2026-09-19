import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import "./Facilities.css";
export default function Facilities() {
  return <><PageHero title="Facilities" subtitle="Explore infrastructure, labs, library, hostel, sports, culture, canteen and research."/>
<main className="landing-page page-scope-facilities">
<div className="container">
<div className="landing-intro"><span className="eyebrow">MKJK</span><h2>Facilities</h2><p>Explore infrastructure, labs, library, hostel, sports, culture, canteen and research.</p></div>
<div className="landing-cards"><Link to="/facilities/infrastructure" className="landing-card"><span className="landing-num">01</span><h3>Infrastructure</h3><span>Explore →</span></Link><Link to="/facilities/labs" className="landing-card"><span className="landing-num">02</span><h3>Laboratories</h3><span>Explore →</span></Link><Link to="/facilities/library" className="landing-card"><span className="landing-num">03</span><h3>Library</h3><span>Explore →</span></Link><Link to="/facilities/hostel" className="landing-card"><span className="landing-num">04</span><h3>Hostel</h3><span>Explore →</span></Link><Link to="/facilities/sports" className="landing-card"><span className="landing-num">05</span><h3>Sports</h3><span>Explore →</span></Link><Link to="/facilities/research" className="landing-card"><span className="landing-num">06</span><h3>Research</h3><span>Explore →</span></Link></div></div></main></>
}
