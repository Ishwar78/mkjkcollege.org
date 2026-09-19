import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiMail, FiBookOpen, FiLayers, FiUsers, FiGrid, FiFileText, FiLogOut, FiMenu } from "react-icons/fi";
import "./AdminLayout.css";
const links=[["Overview","/admin/dashboard",FiHome],["Contact","/admin/contact",FiMail],["Courses","/admin/courses",FiBookOpen],["Academic Programs","/admin/academic-programs",FiLayers],["About","/admin/about",FiFileText],["Inquiries","/admin/inquiries",FiMail],["Faculty","/admin/faculty",FiUsers],["Academics","/admin/academics",FiBookOpen],["Facilities","/admin/facilities",FiGrid],["News","/admin/news",FiFileText]];
export default function AdminLayout({children}){const nav=useNavigate();function logout(){localStorage.removeItem("mkjk_admin_auth");nav("/admin/mkjklogin")}
  return (
<div className="admin-shell">
<aside className="admin-side">
<div className="admin-brand"><img src="/assets/mkjk-logo.jpeg" alt="logo"/>
<div><strong>MKJK Admin</strong><span>Control Panel</span></div></div>
<nav>{links.map(([t,p,I])=><NavLink to={p} key={p} className={({isActive})=>isActive?"active":""}><I/>{t}</NavLink>)}</nav><button className="logout" onClick={logout}><FiLogOut/> Logout</button></aside>
<main className="admin-main page-scope-adminlayout">
<div className="admin-mobile-head"><FiMenu/><strong>MKJK Administration</strong></div>{children}</main></div>
  );
}
