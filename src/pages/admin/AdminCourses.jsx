import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import "./AdminCourses.css";
export default function AdminCourses() {
  const [saved, setSaved] = useState(false);
  return <AdminLayout>
    <div className="admin-head">
      <div><h1>Courses Management</h1>
        <p>Manage course listings and programme information.</p>
      </div>
    </div>
    <div className="admin-work-grid">
      <section className="admin-panel">
        <h3>Manage Content</h3>
        <form className="admin-form" onSubmit={e => { e.preventDefault(); setSaved(true) }}>
          <div className="field">
            <label>Title</label>
            <input placeholder="Enter title" />
          </div>
          <div className="field">
            <label>Content</label>
            <textarea placeholder="Enter content for this section" />
          </div>
          <div className="admin-actions">
            <button className="btn btn-primary" type="submit">Save Changes</button>
            <button className="btn btn-light" type="button" onClick={() => setSaved(false)}>Reset</button>
          </div>{saved && <span className="saved">Saved locally for this demo.</span>}</form>
      </section>
      <aside className="admin-panel">
        <h3>Section Notes</h3>
        <div className="note">
          <strong>Course catalogue</strong>
          <p>Create, update or remove programme information shown to visitors.</p>
        </div>
        <div className="note">
          <strong>Publishing</strong>
          <p>Keep programme names, eligibility and current session information aligned with official notices.</p>
        </div>
      </aside>
    </div>
  </AdminLayout>
}
