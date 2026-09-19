import React from "react";
import PageHero from "../../../components/PageHero";
import "./DateSheet.css";
export default function DateSheet() {
  return <><PageHero title="Date Sheet" subtitle="Examination dates and paper-wise schedules."/>
<main className="inner-page page-scope-datesheet">
<div className="container">
<div className="content-grid">
<article className="content-main">
<section className="content-section"><span className="eyebrow">MKJK</span><h2>Schedule</h2>
<p>The date sheet should list programme, semester, paper, date, time and relevant instructions.</p>
</section>
<section className="content-section"><span className="eyebrow">MKJK</span><h2>Updates</h2>
<p>Revised schedules supersede earlier notices.</p>
</section>
</article>
<aside className="side-card">
<div className="side-accent"></div><h3>Quick Information</h3><p>Examination dates and paper-wise schedules.</p>
<div className="side-links"><a href="mailto:mkjkmrt@gmail.com">Contact College</a><a href="/academics/courses-offered">Explore Programmes</a><a href="/student/notices">Student Notices</a></div></aside></div></div></main></>
}
