import React from "react";
import topArrow from "../images/topArrow.png"
import downArrow from "../images/downArrow.png"

export default function Faq(){
    return(
        <div className="faqComp">
            <div className="Faq_Section1">
                <h4 className="Faq--title">FAQ</h4>
                <h2 className="Faq--subTitle">Frequently Asked Questions</h2>
                <h4 className="Faq--info">Visit our help center to clear out any second thoughts that you may have regarding our services.</h4>
                <button className="Faq--btn">Contact Us</button>
            </div>
            <div className="Faq_Section2">
                <div className="steps">
                    <div className="steps--content">
                        <h4>What is smart contract security?</h4>
                        <img className="steps--content--img" src={topArrow} alt="topArrow"></img>
                    </div>
                    <h4 className="step1--info">Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.</h4>
                </div>
                <div style={{height:"100px"}} className="steps">
                    <div className="steps--content">
                        <h4>Are smart contracts vulnerable?</h4>
                        <img className="steps--content--img" src={downArrow} alt="downArrow"></img>
                    </div>
                </div>
                <div style={{height:"100px"}} className="steps">
                    <div className="steps--content">
                        <h4>What is a smart contract audit?</h4>
                        <img className="steps--content--img" src={downArrow} alt="downArrow"></img>
                    </div>
                </div>
                <div style={{height:"100px"}} className="steps">
                    <div className="steps--content">
                        <h4>Why do smart contracts fail?</h4>
                        <img className="steps--content--img" src={downArrow} alt="downArrow"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}