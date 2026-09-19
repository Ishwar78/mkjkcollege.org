import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import "./Faculty.css";
export default function Faculty() {
  return <><PageHero title="Faculty" subtitle="Meet the teaching and non-teaching teams supporting the college community."/>
<main className="landing-page page-scope-faculty">
<div className="container">
<div className="landing-intro"><span className="eyebrow">MKJK</span><h2>Faculty</h2><p>Meet the teaching and non-teaching teams supporting the college community.</p></div>
<div className="landing-cards"><Link to="/faculty/teaching-staff" className="landing-card"><span className="landing-num">01</span><h3>Teaching Staff</h3><span>Explore →</span></Link><Link to="/faculty/non-teaching-staff" className="landing-card"><span className="landing-num">02</span><h3>Non-Teaching Staff</h3><span>Explore →</span></Link></div></div></main></>
}
