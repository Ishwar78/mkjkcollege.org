import React from "react";
import { FiCheckCircle, FiExternalLink } from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./Affiliation.css";
export default function Affiliation(){return <>
<PageHero title="Affiliation" subtitle="University, regulatory and statutory recognition."/>
<main className="mkjk-affiliation page-scope-affiliation">
    <div className="mkjk-affiliation-container">
        <section className="mkjk-affiliation-intro">
            <span>RECOGNITION & AFFILIATION</span>
            <h1>Academic credentials and recognition</h1>
            <p>The College is affiliated to Maharshi Dayanand University and University Grant Commission and was included in
                 12B & 2F of the UGC act in july2000.</p>
                 <div className="mkjk-affiliation-points"><div>
                    <FiCheckCircle/>
                    <b>Maharshi Dayanand University</b>
                    </div>
                    <div>
                        <FiCheckCircle/>
                        <b>University Grants Commission</b>
                        </div>
                        <div>
                            <FiCheckCircle/>
                            <b>UGC 12B & 2F</b>
                            </div>
                            <div>
                                <FiCheckCircle/>
                                <b>NCTE recognition for B.P.Ed & M.P.Ed</b>
                                </div>
                                </div>
                                </section>
                                <section className="mkjk-affiliation-docs">
                                    <a href="https://mkjkcollege.org/img/files/folder/b.p.ed.%201.jpg" target="_blank" rel="noreferrer">
                                    <span>B.P.Ed.</span>
                                    <b>Recognition document <FiExternalLink/></b>
                                    </a>
                                    <a href="https://mkjkcollege.org/img/files/folder/m.p.ed.%20latest%20orders.jpg" target="_blank" rel="noreferrer">
                                    <span>M.P.Ed. Latest Orders</span>
                                    <b>View document <FiExternalLink/>
                                    </b>
                                    </a>
                                    </section>
                                    </div>
                                    </main>
                                    </>
                                    }
