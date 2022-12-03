import React from "react";
import union3 from "../images/Union 3.png"
import union4 from "../images/Union 4.png"
import hashingBits_Img from "../images/hashingBits_Img.png"
import ticketMark from "../images/ticketMark.png"

export default function Hashingbits(){
    return(
        <div className="hashingBits">
            <div className="hashingBits--part1">
                <div className="part1--div">
                    <img className="hashingBits_Img" src={hashingBits_Img} alt="hashingbits_Img"></img>
                    <h1>HashingBits</h1>
                </div>
                <h4 className="part1--line1">DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight to your Inbox.</h4>
                <h4 className="part1--line2">Explore our weekly newsletter: HashingBits. Stay updated on everything we’re publishing. Stand a step ahead.</h4>
                <h4 className="part1--mail">youremail@gmail.com</h4>
                <div className="part1--register">
                    <img className="ticketMark--Img" src={ticketMark} alt="ticketMark--Img"></img>
                    <h4 className="part1--register">Your email has been successfully registered, headlines will be sent to you soon.</h4>
                </div>
            </div>
            <div className="hashingBits--part2">
                <img src={union3} className="union3" alt="union3"></img>
                <img src={union4} className="union4" alt="union4"></img>
            </div>
        </div>
    )
}