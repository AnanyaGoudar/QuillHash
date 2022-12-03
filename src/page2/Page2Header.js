import React from "react";
import logo from "../images/pathFundLogo.png"

export default function Page2Header(){
    return(
        <div className="page2Header">
            <h4>CLIENTS</h4>
            <h2>Partners</h2>
            <div className="pathFundLogo">
                <img className="pathFundimg" src={logo} alt="pathFund"></img>
                <img className="pathFundimg" src={logo} alt="pathFund"></img>
                <img className="pathFundimg" src={logo} alt="pathFund"></img>
                <img className="pathFundimg" src={logo} alt="pathFund"></img>
                <img className="pathFundimg" src={logo} alt="pathFund"></img>
                <img className="pathFundimg" src={logo} alt="pathFund"></img>
            </div>
        </div>
    )
}
