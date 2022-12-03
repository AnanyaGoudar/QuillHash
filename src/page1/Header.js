import React from "react";
import logo from "../images/quill_logo.png"
import { MdArrowDropDown } from "react-icons/md";

export default function Header(){  
    return(
        <nav className="Page1--nav">
            <img src={logo} className="quill_logo" alt="logo"></img>
            <div className="header--items">
                <button className="auditServcies--btn">Audit Services</button><MdArrowDropDown className="Audit--dropDown"/>
                <a style={{textDecoration: "none"}} className="Pricing" href="https://audits.quillhash.com/pricing">Pricing</a>
                <a style={{textDecoration: "none"}} className="Blogs"  href="https://blog.quillhash.com/">Blogs</a>
                <button className="Resources">Resources</button><MdArrowDropDown className="Resources--dropdown"/>
                <button className="portfolio--btn">Portfolio</button>
                <button className="requestAudit">Request An Audit</button>
            </div>
        </nav>
    )
}