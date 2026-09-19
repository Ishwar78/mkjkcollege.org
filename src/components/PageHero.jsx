import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./PageHero.css";
export default function PageHero({title,subtitle="Maharani Kishori Jat Kanya Mahavidyalaya, Rohtak"}){return <section className="mkjk-pagehero"><div className="mkjk-pagehero-inner"><div className="mkjk-pagehero-breadcrumb"><Link to="/">Home</Link><FiChevronRight/>{title}</div><span>MKJK · ROHTAK</span><h1>{title}</h1><p>{subtitle}</p></div></section>}
