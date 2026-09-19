import React, { useState} from "react";
import AdminLayout from "./AdminLayout";
import "./AdminAcademics.css";
export default function AdminAcademics() {
  const [saved,setSaved]=useState(false);
  return <AdminLayout>
<div className="admin-head">
<div><h1>Academics Management</h1><p>Manage academic notices and learning information.</p></div></div>
<div className="admin-work-grid">
<section className="admin-panel"><h3>Manage Content</h3>
<form className="admin-form" onSubmit={e=>{e.preventDefault();setSaved(true)}}>
<div className="field"><label>Title</label><input placeholder="Enter title"/></div>
<div className="field"><label>Content</label><textarea placeholder="Enter content for this section"/></div>
<div className="admin-actions"><button className="btn btn-primary" type="submit">Save Changes</button><button className="btn btn-light" type="button" onClick={()=>setSaved(false)}>Reset</button></div>{saved&&<span className="saved">Saved locally for this demo.</span>}</form></section>
<aside className="admin-panel"><h3>Section Notes</h3>
<div className="note"><strong>Academic content</strong><p>Update calendars, admission schedules, eligibility, scholarship and other academic information.</p></div>
<div className="note"><strong>Publishing</strong><p>Review content before publishing to keep student information accurate.</p></div></aside></div></AdminLayout>
}
