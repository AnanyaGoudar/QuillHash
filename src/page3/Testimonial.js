import React from "react";
import StackOSLogo from "../images/StackOS_Logo.png"

export default function Testimonial(){
    return(
        <div className="testimonialComp">
            <h4 className="testimonial--title">Testimonial</h4>
            <div className="testimonial--subTitle">
                <h2 className="testimonial--subTitle--h2">What our Clients are saying</h2>
                <button className="testimonial--subTitle--button">Read More</button>
            </div>
            <div className="testimonial--contents--section">
                <div className="testimonial--content">
                    <img src={StackOSLogo} className="StackOSLogo--img" alt="StackOSLogo"></img>
                    <h4 className="StackOS--info">Very professional and timed delivery. Also very prompt in responses and queries.</h4>
                    <h4 className="StackOS--name">Vishnu Korde</h4>
                    <h4 className="StackOS--role">CEO, StackOS</h4>
                </div>
                <div className="testimonial--content">
                <img src={StackOSLogo} className="StackOSLogo--img" alt="StackOSLogo"></img>
                    <h4 className="StackOS--info">Very professional and timed delivery. Also very prompt in responses and queries.</h4>
                    <h4 className="StackOS--name">Vishnu Korde</h4>
                    <h4 className="StackOS--role">CEO, StackOS</h4>
                </div>
                <div className="testimonial--content">
                    <img src={StackOSLogo} className="StackOSLogo--img" alt="StackOSLogo"></img>
                    <h4 className="StackOS--info">Very professional and timed delivery. Also very prompt in responses and queries.</h4>
                    <h4 className="StackOS--name">Vishnu Korde</h4>
                    <h4 className="StackOS--role">CEO, StackOS</h4>
                </div>
            </div>
        </div>
    )
}