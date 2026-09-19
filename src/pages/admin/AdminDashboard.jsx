import React, { useState} from "react";
import AdminLayout from "./AdminLayout";
import "./AdminDashboard.css";
export default function AdminDashboard() {
  const [saved,setSaved]=useState(false);
  return <AdminLayout>
<div className="admin-head">
<div><h1>Dashboard Overview</h1><p>Website performance at a glance.</p></div></div>
<div className="admin-work-grid">
<section className="admin-panel"><h3>Manage Content</h3>
<form className="admin-form" onSubmit={e=>{e.preventDefault();setSaved(true)}}>
<div className="field"><label>Title</label><input placeholder="Enter title"/></div>
<div className="field"><label>Content</label><textarea placeholder="Enter content for this section"/></div>
<div className="admin-actions"><button className="btn btn-primary" type="submit">Save Changes</button><button className="btn btn-light" type="button" onClick={()=>setSaved(false)}>Reset</button></div>{saved&&<span className="saved">Saved locally for this demo.</span>}</form></section>
<aside className="admin-panel"><h3>Section Notes</h3>
<div className="note"><strong>Quick overview</strong><p>Use this dashboard to monitor website sections, enquiries, courses, faculty and published news.</p></div>
<div className="note"><strong>Content workflow</strong><p>Each sidebar section opens its own dedicated management page so content remains organised.</p></div></aside></div></AdminLayout>
}
