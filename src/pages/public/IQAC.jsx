import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import "./IQAC.css";
export default function IQAC() {
  return <><PageHero title="IQAC" subtitle="Quality assurance, accreditation, annual reports, meetings and development planning."/>
<main className="landing-page page-scope-iqac">
<div className="container">
<div className="landing-intro"><span className="eyebrow">MKJK</span><h2>IQAC</h2><p>Quality assurance, accreditation, annual reports, meetings and development planning.</p></div>
<div className="landing-cards"><Link to="/iqac/naac" className="landing-card"><span className="landing-num">01</span><h3>NAAC</h3><span>Explore →</span></Link><Link to="/iqac/committee" className="landing-card"><span className="landing-num">02</span><h3>IQAC Committee</h3><span>Explore →</span></Link><Link to="/iqac/aqar" className="landing-card"><span className="landing-num">03</span><h3>AQAR</h3><span>Explore →</span></Link><Link to="/iqac/meetings" className="landing-card"><span className="landing-num">04</span><h3>IQAC Meetings</h3><span>Explore →</span></Link><Link to="/iqac/development-plan" className="landing-card"><span className="landing-num">05</span><h3>Development Plan</h3><span>Explore →</span></Link></div></div></main></>
}
