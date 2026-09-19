import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { FiLock, FiMail, FiArrowRight } from "react-icons/fi";
import "./AdminLogin.css";
export default function AdminLogin() {
  const [email,setEmail]=useState("");const [password,setPassword]=useState("");const [error,setError]=useState("");const nav=useNavigate();function submit(e){e.preventDefault();const okEmail=import.meta.env.VITE_ADMIN_EMAIL||"admin@mkjkcollege.org";const okPass=import.meta.env.VITE_ADMIN_PASSWORD||"MKJK@2026";if(email===okEmail&&password===okPass){localStorage.setItem("mkjk_admin_auth","1");nav("/admin/dashboard")}else setError("Invalid admin credentials. Check your email and password.");}
  return (
<main className="admin-login page-scope-adminlogin">
<div className="admin-login-card"><img src="/assets/mkjk-logo.jpeg" alt="MKJK"/><span className="eyebrow">Secure Administration</span><h1>Admin Login</h1><p>Sign in to manage college website content.</p>
<form onSubmit={submit}><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="admin@mkjkcollege.org" required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required/></label>{error&&
<div className="login-error">{error}</div>}<button className="btn btn-primary">Sign In <FiArrowRight/></button></form><small>Default demo login: admin@mkjkcollege.org / MKJK@2026. Change these using VITE_ADMIN_EMAIL and VITE_ADMIN_PASSWORD before production.</small></div></main>
  );
}
