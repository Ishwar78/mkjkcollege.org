import React, { useState} from "react";
import AdminLayout from "./AdminLayout";
import "./AdminAbout.css";
export default function AdminAbout() {
  const [saved,setSaved]=useState(false);
  return <AdminLayout>
<div className="admin-head">
<div><h1>About Content</h1><p>Manage institutional profile and About Us content.</p></div></div>
<div className="admin-work-grid">
<section className="admin-panel"><h3>Manage Content</h3>
<form className="admin-form" onSubmit={e=>{e.preventDefault();setSaved(true)}}>
<div className="field"><label>Title</label><input placeholder="Enter title"/></div>
<div className="field"><label>Content</label><textarea placeholder="Enter content for this section"/></div>
<div className="admin-actions"><button className="btn btn-primary" type="submit">Save Changes</button><button className="btn btn-light" type="button" onClick={()=>setSaved(false)}>Reset</button></div>{saved&&<span className="saved">Saved locally for this demo.</span>}</form></section>
<aside className="admin-panel"><h3>Section Notes</h3>
<div className="note"><strong>Institutional story</strong><p>Maintain History, Our College, Vision & Mission, Objectives and other About sections.</p></div>
<div className="note"><strong>Accuracy</strong><p>Only publish verified institutional information.</p></div></aside></div></AdminLayout>
}
