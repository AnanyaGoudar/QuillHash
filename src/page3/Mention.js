import React from "react";

export default function Mention(){
    return(
        <div className="mentionComponent">
            <h4 className="mention--title">MENTIONS</h4>
            <h2 className="mention--subTitle">As Featured In</h2>
            <div className="feature1">
                <button className="feature1--sub1" alt="feature1--sub"><h4 style={{marginTop: "148px"}}>Read More</h4></button>
                <button className="feature1--sub2" alt="feature1--sub"><h4 style={{marginTop: "148px"}}>Read More</h4></button>
                <button className="feature1--sub3" alt="feature1--sub"><h4 style={{marginTop: "148px"}}>Read More</h4></button>
            </div>
            <div className="feature2">
                <button className="feature2--sub1" alt="feature2--sub"><h4 style={{marginTop: "148px"}}>Read More</h4></button>
                <button className="feature2--sub2" alt="feature2--sub"><h4 style={{marginTop: "148px"}}>Read More</h4></button>
                <button className="feature2--sub3" alt="feature2--sub"><h4 style={{marginTop: "148px"}}>Read More</h4></button>
            </div>
        </div>
    )
}