import React from "react";
import Lottie from "lottie-react";
import blockAnim from "../animations/81943.json"

export default function Main(){
    function onRequestQuote(){
        window.open("https://audits.quillhash.com/free-smart-contract-audit-consultation")
    }
    function onExploreServices(){
        window.open("https://audits.quillhash.com/services/eos-audit")
    }
    
    return(
        <div className="main">
            <h1 className="main--content">Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence Services</h1>
            <h3 className="main--subContent">QuillAudits, Making web3 a safer place</h3>
            <div className="main--btn">
                <button className="requestQuote" onClick={onRequestQuote}>Request Free Quote</button>
                <button className="exploreServices" onClick={onExploreServices}>Explore Services</button>
            </div>
            <div className="blockAnim">
                <Lottie animationData={blockAnim}/>
            </div>
            <div className="main--footer">
                <h2 className="value">$12.8B</h2>
                <h4 className="value--txt">Amount Lost To DeFi Hacks in 2021</h4>
                <h2 className="value">600K</h2>
                <h4 className="value--txt">Lines of Codes Secured by QuillAudits</h4>
                <h2 className="value">$14.6B</h2>
                <h4 className="value--txt">Amount Protected By QuillAudits</h4>
            </div>
            
        </div>
    )
}