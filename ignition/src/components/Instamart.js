import React ,{useState} from "react";
import Section from "./Section";

const Instamart = () => {
  const [visibleSection,setVisibleSection]=useState("");

  const hide=()=>setVisibleSection("")

    return (
        <>
        <h1 className="text-3xl p-2 m-2 font-bold">Instmart</h1>
            <Section title="About Instamart" isVisible={visibleSection==="about"} setIsVisible={()=>setVisibleSection("about")} hide={hide}/>
            <Section title="Details of Instamart" isVisible={visibleSection==="details"} setIsVisible={()=>setVisibleSection("details")} hide={hide}/>
            <Section title="Careers"isVisible={visibleSection==="careers"} setIsVisible={()=>setVisibleSection("careers")} hide={hide}/>
        </>
    );
};

export default Instamart;
