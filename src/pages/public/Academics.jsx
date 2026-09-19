import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import "./Academics.css";
export default function Academics() {
  return <><PageHero title="Academics" subtitle="Explore programmes, admissions, eligibility, fees, scholarships and academic planning."/>
<main className="landing-page page-scope-academics">
<div className="container">
<div className="landing-intro"><span className="eyebrow">MKJK</span><h2>Academics</h2><p>Explore programmes, admissions, eligibility, fees, scholarships and academic planning.</p></div>
<div className="landing-cards"><Link to="/academics/courses-offered" className="landing-card"><span className="landing-num">01</span><h3>Courses Offered</h3><span>Explore →</span></Link><Link to="/academics/undergraduate" className="landing-card"><span className="landing-num">02</span><h3>Under Graduate</h3><span>Explore →</span></Link><Link to="/academics/postgraduate" className="landing-card"><span className="landing-num">03</span><h3>Post Graduate</h3><span>Explore →</span></Link><Link to="/academics/eligibility" className="landing-card"><span className="landing-num">04</span><h3>Eligibility</h3><span>Explore →</span></Link><Link to="/academics/fee-structure" className="landing-card"><span className="landing-num">05</span><h3>Fee Structure</h3><span>Explore →</span></Link><Link to="/academics/academic-calendar" className="landing-card"><span className="landing-num">06</span><h3>Academic Calendar</h3><span>Explore →</span></Link></div></div></main></>
}
