import React, { useState} from "react";
import AdminLayout from "./AdminLayout";
import "./AdminFacilities.css";
export default function AdminFacilities() {
  const [saved,setSaved]=useState(false);
  return <AdminLayout>
<div className="admin-head">
<div><h1>Facilities Management</h1><p>Manage campus facility descriptions and media.</p></div></div>
<div className="admin-work-grid">
<section className="admin-panel"><h3>Manage Content</h3>
<form className="admin-form" onSubmit={e=>{e.preventDefault();setSaved(true)}}>
<div className="field"><label>Title</label><input placeholder="Enter title"/></div>
<div className="field"><label>Content</label><textarea placeholder="Enter content for this section"/></div>
<div className="admin-actions"><button className="btn btn-primary" type="submit">Save Changes</button><button className="btn btn-light" type="button" onClick={()=>setSaved(false)}>Reset</button></div>{saved&&<span className="saved">Saved locally for this demo.</span>}</form></section>
<aside className="admin-panel"><h3>Section Notes</h3>
<div className="note"><strong>Facilities</strong><p>Maintain infrastructure, labs, library, hostel, sports, cultural, canteen and research sections.</p></div>
<div className="note"><strong>Media</strong><p>Use approved campus images and captions for public-facing pages.</p></div></aside></div></AdminLayout>
}
