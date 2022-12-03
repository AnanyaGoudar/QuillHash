import React from "react";
import quillHash_logo from "../images/quillHash_logo.png"
import lang from "../images/lang.png"
import japanLogo from "../images/Japan_Flag.png"
import chinaLogo from "../images/Flag-China.png"
import { GoMail } from "react-icons/go";
import facebook_logo from "../images/facebook_logo.png"
import twitter_logo from "../images/twitter_logo.png"
import LinkedIn_logo from "../images/LinkedIn_logo.png"
import instaIcon from "../images/instaIcon.png"
import telegram_logo from "../images/telegram_logo.png"
import reddit_logo from "../images/reddit_logo.png"
import M_logo from "../images/M_logo.png"
import Logo  from "../images/Group 41765.png"
import YT_logo from "../images/YT_logo.png"

export default function Footer(){
    return(
        <div className="footerComp">
            <div className="footerComp--sections">
                <div className="footer-section1">
                    <h4 className="footer-section1--title">Parent Company</h4>
                    <img className="quillHash_logo" src={quillHash_logo} alt="quillHash_logo"></img>
                    <h4 className="quill--info">Quillhash delivers enterprise grade blockchain technology to leading companies worldwide.</h4>
                    <img src={lang} className="lang" alt="lang"></img>
                    <div className="flags">
                        <img src={japanLogo} className="japanLogo" alt="japanLogo"></img>
                        <img src={chinaLogo} className="chinaLogo" alt="chinaLogo"></img>
                    </div>
                </div>
                <div className="footer-section2">
                    <h4 className="section2--title">Explore</h4>
                    <p><a href="https://audits.quillhash.com/careers" className="Explore--Careers">Careers</a></p>
                    <p><a href="https://audits.quillhash.com/resources/courses" className="Explore--Courses">Courses</a></p>
                    <p><a href="https://audits.quillhash.com/resources/blockchain-security-ctf" className="Explore--Blockchain">Blockchain Security CTF</a></p>
                    <p><a href="https://quillaudits-partners-program.super.site/" className="Explore--Partner">QuillAudits Partner Program</a></p>
                    <p><a href="https://audits.quillhash.com/referral" className="Explore--Referral">Referral Program</a></p>
                </div>
                <div className="footer-section3">
                    <h4 className="section3--title">Services</h4>
                    <p className="section3--smart">Smart Contract Auditing</p>
                    <p><a className="section3--pen" href="https://audits.quillhash.com/services/blockchain-pen-testing">Blockchain Pen Testing</a></p>
                    <p><a className="section3--diligence" href="https://audits.quillhash.com/services/nft-due-diligence">Due Diligence</a></p>
                </div>
                <div className="footer-section4">
                    <h4 className="section4--title">Contact Us</h4>
                    <h4 className="section4--info">LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur DLF Phase1, Sector 28, Gurugram, Haryana - 122002</h4>
                    <div className="section4--mail">
                        <GoMail className="mail--icon"/>
                        <a className="mail" href="mailto:contact@quillaudits.com">contact@quillaudits.com</a>
                    </div>
                </div>
            </div>
            <div className="journey">
                <h4 className="journey--title">Join our Journey</h4>
                <div className="socialMedia--Icons">
                    <img className="logos" src={facebook_logo} alt="facebook_logo"></img>
                    <a href="https://twitter.com/quillaudits"><img className="logos" src={twitter_logo} alt="twitter_logo"></img></a>
                    <a href="https://www.linkedin.com/showcase/quillaudits/"><img className="logos" src={LinkedIn_logo} alt="LinkedIn_logo"></img></a>
                    <img className="logos" src={instaIcon} alt="instaIcon"></img>
                    <a href="https://t.me/QuillAudits"><img className="logos" src={telegram_logo} alt="telegram_logo"></img></a>
                    <a href="https://www.reddit.com/r/QuillAudits/"><img className="logos" src={reddit_logo} alt="reddit_logo"></img></a>
                    <a href="https://quillaudits.medium.com/"><img className="logos" src={M_logo} alt="M_logo"></img></a>
                    <a href="https://discord.com/invite/WYb8Gfz8yy"><img className="logos" src={Logo} alt="Logo"></img></a>
                    <a href="https://www.youtube.com/channel/UC5Yt_8qEaAr-PiTMmGBuPCQ/videos"><img className="logos" src={YT_logo} alt="YT_logo"></img></a>
                </div>
            </div>
            <hr className="footer--hr"></hr>
            <h4 className="footer--rights">All Rights Reserved. © Copyright 2022. QuillHash Technologies Private Limited</h4>
        </div>
    )
}
