import React from "react";
import Lottie from "lottie-react";
import smartContract from "../animations/smartContract.json"
import ethereum from "../images/ethereum.jpg"
import polygon from "../images/polygon.png"
import bsc from "../images/BSC.png"
import solana from "../images/solana.png"
import blockChain from "../animations/blockChain.json"
// import due from "../animations/dueDiligence.lottie"
import diligenceLogo from "../images/diligenceLogo.png"
import '@dotlottie/player-component';

export default function Service(){
    return(
        <div className="Service">
                <Lottie className="smartContract" animationData={smartContract}/>
            <div className="serviceContent1"> 
                <h4 className="category">SERVICE</h4>
                <h1 className="serviceName">Smart Contract Auditing</h1>
                <h4 className="serviceContent">Our Audit Process for smart contract is based on the comprehensive approach we follow to investigate the code for security flaws and potential vulnerabilities.</h4>
                <div className="logos">
                    <div className="logo1">
                        <img className="logos" id="ethereum" src={ethereum} alt="ethereum"></img>
                        <h4 style={{marginTop:0}}>Ethereum</h4>
                    </div>
                    <div className="logo2">
                        <img className="logos" id="polygon" src={polygon} alt="polygon"></img>
                        <h4 style={{marginTop:0}}>Polygon</h4>
                    </div>
                    <div className="logo3">
                        <img className="logos" id="bsc" src={bsc} alt="bsc"></img>
                        <h4 style={{marginTop:0}}>BSC</h4>
                    </div>
                    <div className="logo4">
                        <img className="logos" id="solana" src={solana} alt="solana"></img>
                        <h4 style={{marginTop:0}}>Solana</h4>
                    </div>
                    <div className="logo5">
                        <img className="logos" id="eos" src={ethereum} alt="eos"></img>
                        <h4 style={{marginTop:0}}>EOS</h4>
                    </div>
                </div>
                <button className="serviceContent1--btn">Explore</button>
            </div>
            <Lottie className="blockChain" animationData={blockChain}/>
            <div className="serviceContent2">
                <h4 className="category">SERVICE</h4>
                <h1 className="serviceName">Blockchain Penetration Testing</h1>
                <h4 className="serviceContent2--serviceContent">QuillAudits proven strategy to tackle vulnerabilities specific to blockchain technology comes with a mix-blend of conventional pentesting approach and dynamic blockchain analysis.</h4>
                <button className="serviceContent2--btn">Learn More</button>
            </div>
            {/* <Lottie className="dueDiligence" animationData={due}/> */}
            <dotlottie-player
                src="../animations/Anim3.lottie"
                autoplay
                loop
                style={{ height: '100%', width: '100%' }}
            />
            <div className="service3">
                <h4 className="category3">SERVICE</h4>
                <h1 className="serviceName3">Due Diligence</h1>
                <h4 className="serviceContext3">QuillAudits acknowledges the significant threats involved in smart contracts, which can lead to many critical possibilities.</h4>
                <div className="numbers">
                    <div className="number1">
                        <img className="number--img" src={diligenceLogo} alt="number1"></img>
                        <h4>DeFi Due Diligence</h4>
                    </div>
                    <div className="number2">
                        <img className="number--img" src={diligenceLogo} alt="number2"></img>
                        <h4>NFT Due Diligence</h4>
                    </div>
                    <div className="number3">
                        <img className="number--img" src={diligenceLogo} alt="number3"></img>
                        <h4>Rug Pull Due Diligence</h4>
                    </div>
                    <button className="serviceContent3--btn">Explore</button>
                </div>
            </div>
        </div>
    )
}