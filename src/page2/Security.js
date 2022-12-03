import React from "react";
import security from "../images/secure.png"

export default function Security(){
    return(
        <div className="security">
            <h4 className="securityTitle">THE SECURITY</h4>
            <h2 className="securitySubTitle">How We Secure Your Web3 Project</h2>
            <img src={security} className="security--img" alt="security--img"></img>
        </div>
    )
}