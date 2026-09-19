import React, { useState} from "react";
import AdminLayout from "./AdminLayout";
import "./AdminAcademicPrograms.css";
export default function AdminAcademicPrograms() {
  const [saved,setSaved]=useState(false);
  return <AdminLayout>
<div className="admin-head">
<div><h1>Academic Programmes</h1><p>Manage the academic programme showcase.</p></div></div>
<div className="admin-work-grid">
<section className="admin-panel"><h3>Manage Content</h3>
<form className="admin-form" onSubmit={e=>{e.preventDefault();setSaved(true)}}>
<div className="field"><label>Title</label><input placeholder="Enter title"/></div>
<div className="field"><label>Content</label><textarea placeholder="Enter content for this section"/></div>
<div className="admin-actions"><button className="btn btn-primary" type="submit">Save Changes</button><button className="btn btn-light" type="button" onClick={()=>setSaved(false)}>Reset</button></div>{saved&&<span className="saved">Saved locally for this demo.</span>}</form></section>
<aside className="admin-panel"><h3>Section Notes</h3>
<div className="note"><strong>Programme cards</strong><p>Maintain undergraduate, postgraduate and other programme highlights.</p></div>
<div className="note"><strong>Session updates</strong><p>Review programme information whenever a new academic session is published.</p></div></aside></div></AdminLayout>
}
