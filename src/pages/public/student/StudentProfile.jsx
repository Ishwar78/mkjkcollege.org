import React from "react";
import PageHero from "../../../components/PageHero";
import "./StudentProfile.css";
export default function StudentProfile() {
  return <><PageHero title="Student Profile" subtitle="A digital gateway to student-facing information and services."/>
<main className="inner-page page-scope-studentprofile">
<div className="container">
<div className="content-grid">
<article className="content-main">
<section className="content-section"><span className="eyebrow">MKJK</span><h2>Student information</h2>
<p>The student profile area can connect learners with academic records, notices, activities and support services.</p>
</section>
<section className="content-section"><span className="eyebrow">MKJK</span><h2>Privacy</h2>
<p>Personal student information should be accessed only through authenticated institutional systems.</p>
</section>
</article>
<aside className="side-card">
<div className="side-accent"></div><h3>Quick Information</h3><p>A digital gateway to student-facing information and services.</p>
<div className="side-links"><a href="mailto:mkjkmrt@gmail.com">Contact College</a><a href="/academics/courses-offered">Explore Programmes</a><a href="/student/notices">Student Notices</a></div></aside></div></div></main></>
}
