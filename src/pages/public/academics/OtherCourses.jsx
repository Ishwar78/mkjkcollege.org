import React from "react";
import { FiLayers, FiArrowRight } from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./OtherCourses.css";
export default function OtherCourses(){return <><PageHero title="Other Courses" subtitle="Certificate, add-on and specialised learning opportunities."/><main className="mkjk-other page-scope-othercourses"><div className="mkjk-other-container"><div className="mkjk-other-head"><span>OTHER PROGRAMMES</span><h1>Skill-oriented learning beyond the core curriculum.</h1><p>Explore additional and specialised programmes listed for students and learners.</p></div><article className="mkjk-other-card"><span><FiLayers/></span><div><small>OTHER COURSE</small><h2>Certificate / Add-on Courses</h2><p>Programmes designed to complement academic learning with additional skills and practical exposure.</p></div><a href="/contact">Enquire <FiArrowRight/></a></article></div></main></>}
