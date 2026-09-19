import React, { useEffect,useState} from "react";
import { FiArrowUp } from "react-icons/fi";
import "./BackToTop.css";
export default function BackToTop() {
  const [show,setShow]=useState(false);useEffect(()=>{const f=()=>setShow(window.scrollY>500);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f)},[]);return show?<button className="backtop" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><FiArrowUp/></button>:null
}
