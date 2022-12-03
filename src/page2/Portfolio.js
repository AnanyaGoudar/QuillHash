import React from "react";
import latestWork from "../images/latestWork.png";
import { FaChevronLeft } from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";

export default function Portfolio(){
    return(
        <div className="portfolioComp">
            <h4 className="portfolioTitle">PORTFOLIO</h4>
            <h2 className="portfolioSubTitle">Latest Work</h2>
            <div className="work--btns">
                <button className="ethereum">Ethereum</button>
                <button className="binanceSC">Binance SC</button>
                <button className="nft">NFT</button>
                <button className="solana">Solana</button>
            </div>
            <div className="workSections">
                <FaChevronLeft className="leftArrow"/>
                <div className="work1">
                    <img className="latestWork" src={latestWork}alt="latestWork"></img>
                    <h3 className="workTitle">StackOS Audit Report</h3>
                    <div className="workBtns">
                        <button className="buttons">VIEW</button>
                        <button className="buttons">DOWNLOAD</button>
                    </div>
                </div>
                <div className="work2">
                    <img className="latestWork" src={latestWork}alt="latestWork"></img>
                    <h3 className="workTitle">StackOS Audit Report</h3>
                    <div className="workBtns">
                        <button className="buttons">VIEW</button>
                        <button className="buttons">DOWNLOAD</button>
                    </div>
                </div>
                <div className="work3">
                    <img className="latestWork" src={latestWork}alt="latestWork"></img>
                    <h3 className="workTitle">StackOS Audit Report</h3>
                    <div className="workBtns">
                        <button className="buttons">VIEW</button>
                        <button className="buttons">DOWNLOAD</button>
                    </div>
                </div>
                <FaChevronRight className="rightArrow"/>
            </div>
            <button className="button--btn">BUTTON</button>
        </div>
    )
}