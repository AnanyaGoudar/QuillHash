import React from "react";
import blogImg from "../images/Mask.png"

export default function Blog(){
    return(
        <div className="blogComp">
            <h4>OUR BLOG</h4>
            <div className="Blog--subTitle">
                <h2>Catch up on the news</h2>
                <button className="Blog--subTitle--btn">Read More</button>
            </div>
            <div className="Blogs--section">
                <div className="blogs">
                    <img src={blogImg} className="Blog--img" alt="Blog--img"></img>
                    <h3 className="blogs--title">Web3 Security: Classification & Analysis of Web3 Hacks</h3>
                    <h4 className="blogs--date">15 Mar, 2023</h4>
                    <h4 className="blogs--info">At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.</h4>
                </div>
                <div>
                    <img src={blogImg} className="Blog--img" alt="Blog--img"></img>
                    <h3 className="blogs--title">Web3 Security: Classification & Analysis of Web3 Hacks</h3>
                    <h4 className="blogs--date">15 Mar, 2023</h4>
                    <h4 className="blogs--info">At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.</h4>
                </div>
                <div>
                    <img src={blogImg} className="Blog--img" alt="Blog--img"></img>
                    <h3 className="blogs--title">Web3 Security: Classification & Analysis of Web3 Hacks</h3>
                    <h4 className="blogs--date">15 Mar, 2023</h4>
                    <h4 className="blogs--info">At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.</h4>
                </div>
            </div>
        </div>
    )
}