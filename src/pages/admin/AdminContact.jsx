import React, { useState} from "react";
import AdminLayout from "./AdminLayout";
import "./AdminContact.css";
export default function AdminContact() {
  const [saved,setSaved]=useState(false);
  return <AdminLayout>
<div className="admin-head">
<div><h1>Contact Management</h1><p>Manage contact details, enquiry channels and messages.</p></div></div>
<div className="admin-work-grid">
<section className="admin-panel"><h3>Manage Content</h3>
<form className="admin-form" onSubmit={e=>{e.preventDefault();setSaved(true)}}>
<div className="field"><label>Title</label><input placeholder="Enter title"/></div>
<div className="field"><label>Content</label><textarea placeholder="Enter content for this section"/></div>
<div className="admin-actions"><button className="btn btn-primary" type="submit">Save Changes</button><button className="btn btn-light" type="button" onClick={()=>setSaved(false)}>Reset</button></div>{saved&&<span className="saved">Saved locally for this demo.</span>}</form></section>
<aside className="admin-panel"><h3>Section Notes</h3>
<div className="note"><strong>Contact details</strong><p>Update official address, phone numbers, email and office information here.</p></div>
<div className="note"><strong>Enquiries</strong><p>Review incoming website enquiries and mark them for follow-up.</p></div></aside></div></AdminLayout>
}
