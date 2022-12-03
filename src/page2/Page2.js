import React from "react";
import Page2Header from "./Page2Header.js"
import Service from "./Service.js"
import Security from "./Security.js"
import Portfolio from "./Portfolio.js";

export default function Page2(){
    return(
        <div className="Page2">
            <Page2Header/>
            <Service/>
            <Security/>
            <Portfolio/>
        </div>
    )
}
