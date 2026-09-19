import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import "./CommunityServices.css";
export default function CommunityServices() {
  return <><PageHero title="Community Services" subtitle="Service, outreach, equality, leadership and community engagement initiatives."/>
<main className="landing-page page-scope-communityservices">
<div className="container">
<div className="landing-intro"><span className="eyebrow">MKJK</span><h2>Community Services</h2><p>Service, outreach, equality, leadership and community engagement initiatives.</p></div>
<div className="landing-cards"><Link to="/community/nss" className="landing-card"><span className="landing-num">01</span><h3>NSS</h3><span>Explore →</span></Link><Link to="/community/ncc" className="landing-card"><span className="landing-num">02</span><h3>NCC</h3><span>Explore →</span></Link><Link to="/community/youth-red-cross" className="landing-card"><span className="landing-num">03</span><h3>Youth Red Cross</h3><span>Explore →</span></Link><Link to="/community/women-cell" className="landing-card"><span className="landing-num">04</span><h3>Women Cell</h3><span>Explore →</span></Link><Link to="/community/legal-literacy" className="landing-card"><span className="landing-num">05</span><h3>Legal Literacy</h3><span>Explore →</span></Link><Link to="/community/ek-bharat" className="landing-card"><span className="landing-num">06</span><h3>EK Bharat</h3><span>Explore →</span></Link></div></div></main></>
}
