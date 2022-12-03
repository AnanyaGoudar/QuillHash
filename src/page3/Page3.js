import React from "react";
import NeedOfSmart from "./NeedOfSmart.js"
import Mention from "./Mention.js"
import Testimonial from "./Testimonial.js";
import Faq from "./Faq.js";
import Blog from "./Blog.js";

export default function Page3(){
    return(
        <div className="Page3">
            <NeedOfSmart/>
            <Mention/>
            <Testimonial/>
            <Faq/>
            <Blog/>
        </div>
    )
}