import React from "react";
import pic from "../images/pic.png"

export default function Collab(){
    return(
        <div className="collabComp">
            <div className="collabComp--part1">
                <h2>Join Hands With us to secure Web3 Together</h2>
                <h4>Help us in our journey to secure web3 by joining our team of talented individuals spread across the globe.</h4>
                <button className="collabComp--part1--btn">APPLY NOW!</button>
            </div>
            <div className="collabComp--part2">
                <img className="collabComp--part2--img" src={pic} alt="join--img"></img>
            </div>
        </div>
    )
}