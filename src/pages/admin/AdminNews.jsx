import React, { useState} from "react";
import AdminLayout from "./AdminLayout";
import "./AdminNews.css";
export default function AdminNews() {
  const [saved,setSaved]=useState(false);
  return <AdminLayout>
<div className="admin-head">
<div><h1>News Management</h1><p>Publish and manage latest news and notices.</p></div></div>
<div className="admin-work-grid">
<section className="admin-panel"><h3>Manage Content</h3>
<form className="admin-form" onSubmit={e=>{e.preventDefault();setSaved(true)}}>
<div className="field"><label>Title</label><input placeholder="Enter title"/></div>
<div className="field"><label>Content</label><textarea placeholder="Enter content for this section"/></div>
<div className="admin-actions"><button className="btn btn-primary" type="submit">Save Changes</button><button className="btn btn-light" type="button" onClick={()=>setSaved(false)}>Reset</button></div>{saved&&<span className="saved">Saved locally for this demo.</span>}</form></section>
<aside className="admin-panel"><h3>Section Notes</h3>
<div className="note"><strong>News workflow</strong><p>Create title, category, date and full content for the public news feed.</p></div>
<div className="note"><strong>Archive</strong><p>Keep important historical notices organised while ensuring current notices remain visible.</p></div></aside></div></AdminLayout>
}
