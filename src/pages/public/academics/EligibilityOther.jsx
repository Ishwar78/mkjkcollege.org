import React from "react";
import { FiInfo, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./EligibilityOther.css";
export default function EligibilityOther(){return <><PageHero title="Eligibility — Other Courses" subtitle="Eligibility information for other and specialised programmes."/><main className="mkjk-eligibility-other page-scope-eligibilityother"><div className="mkjk-eligibility-other-container"><article><span><FiInfo/></span><div><small>OFFICIAL INFORMATION</small><h1>Other Course Eligibility</h1><p>A separate eligibility criterion for other courses was not included in the content supplied for this page. Please refer to the latest course-specific admission notice for the applicable eligibility conditions.</p><Link to="/student/notices">View Notices <FiArrowRight/></Link></div></article></div></main></>}
