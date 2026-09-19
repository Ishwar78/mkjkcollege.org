import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import "./StudentCorner.css";
export default function StudentCorner() {
  return <><PageHero title="Student Corner" subtitle="A single gateway to timetables, notices, examinations, results and student support."/>
<main className="landing-page page-scope-studentcorner">
<div className="container">
<div className="landing-intro"><span className="eyebrow">MKJK</span><h2>Student Corner</h2><p>A single gateway to timetables, notices, examinations, results and student support.</p></div>
<div className="landing-cards"><Link to="/student/time-table" className="landing-card"><span className="landing-num">01</span><h3>Time Table</h3><span>Explore →</span></Link><Link to="/student/notices" className="landing-card"><span className="landing-num">02</span><h3>Notices</h3><span>Explore →</span></Link><Link to="/student/examination" className="landing-card"><span className="landing-num">03</span><h3>Examination</h3><span>Explore →</span></Link><Link to="/student/results" className="landing-card"><span className="landing-num">04</span><h3>Results</h3><span>Explore →</span></Link><Link to="/academics/scholarship-details" className="landing-card"><span className="landing-num">05</span><h3>Scholarships</h3><span>Explore →</span></Link><Link to="/student/major-achievements" className="landing-card"><span className="landing-num">06</span><h3>Achievements</h3><span>Explore →</span></Link></div></div></main></>
}
