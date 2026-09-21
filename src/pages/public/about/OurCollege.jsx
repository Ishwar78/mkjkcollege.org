import React from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./OurCollege.css";
export default function OurCollege(){
    return <><PageHero title="Our College" subtitle="A journey from knowledge to confidence, competence and lifelong learning."/>
    <main className="mkjk-college page-scope-ourcollege">
        <div className="mkjk-college-container">
            <section className="mkjk-college-hero">
                <div className="mkjk-college-image">
                    <img src="/building.png" 
                    alt="Maharani Kishori Jat Kanya Mahavidyalaya campus"/>
                    <span>Established <b>1988</b></span>
                    </div>
                    <article>
                        <span>OUR COLLEGE</span>
                        <h1>Empowering rural girls through education</h1>
                        <p>Maharani Kishori Jat Kanya Mahavidyalya, Rohtak was established in 1988 managed under Jat 
                            Education Society by then President Ch. Uday Singh Mann, after the name of legendary Maharani
                             Kishori, Queen of Maharaja Surajmal, the Jat Emperor of Delhi.</p>
                             <p>Maharani Kishori who has become an icon of valour and grit, a symbol of 
                                indomitable courage and undaunted spirit in hour of crisis. The founders of Maharani
                                 Kishori Jat Kanya Mahavidyalya wished to inculcate the virtues of courage and confidence
                                  in all rural girls.</p>
                                  </article>
                                  </section>
                                  <section className="mkjk-college-story">
                                    <div><span>OUR PURPOSE</span>
                                    <h2>From potential to possibility</h2>
                                    </div>
                                    <div>
                                        <p>Since then Maharani Kishori Jat Kanya Mahavidyalya has been accomplishing the
                                             missionary task of imparting the light of knowledge to this deprived section of
                                              society primarily to the rural girls of Haryana with a commitment to convert
                                               this weaker section of society into the strength of the nation by enabling 
                                               them to discover their inherent potential and innate qualities and instilling 
                                               in them a passion for life long learning.</p>
                                               <p>The main objective of the college is to groom young talents into skilled 
                                                knowledgeable and capacitated women who with commitment, confidence and 
                                                competence will exhibit the highest standards of ethical behaviors in every
                                                 walk of life and turn every difficulty into an opportunity to move ahead
                                                  towards perfection.</p>
                                                  </div></section><section className="mkjk-college-values"><div><span>OUR VALUES</span><h2>Education with purpose</h2><p>The very motto of the college <b>Arise, Awake and Achieve</b> implies a journey from the dark labyrinths of ignorance to the luminous vistas of knowledge.</p></div><div className="mkjk-value-list">{['Knowledge and lifelong learning','Courage and confidence','Ethical behaviour and responsibility','Empowerment of women'].map(x=><div key={x}><FiCheckCircle/><span>{x}</span></div>)}</div></section><a className="mkjk-college-next" href="/about/our-inspiration">Explore Our Inspirations <FiArrowRight/></a></div></main></>}
