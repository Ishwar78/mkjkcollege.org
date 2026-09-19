import React from "react";
import PageHero from "../../../components/PageHero";
import "./TimeTable.css";
export default function TimeTable() {
  return <><PageHero title="Time Table" subtitle="Find class schedules and timetable updates."/>
<main className="inner-page page-scope-timetable">
<div className="container">
<div className="content-grid">
<article className="content-main">
<section className="content-section"><span className="eyebrow">MKJK</span><h2>Current timetable</h2>
<p>Timetables are organised by programme, semester and department. Students should follow the latest published schedule.</p>
</section>
<section className="content-section"><span className="eyebrow">MKJK</span><h2>Changes</h2>
<p>Any room, period or class changes should be checked through official notices.</p>
</section>
</article>
<aside className="side-card">
<div className="side-accent"></div><h3>Quick Information</h3><p>Find class schedules and timetable updates.</p>
<div className="side-links"><a href="mailto:mkjkmrt@gmail.com">Contact College</a><a href="/academics/courses-offered">Explore Programmes</a><a href="/student/notices">Student Notices</a></div></aside></div></div></main></>
}
