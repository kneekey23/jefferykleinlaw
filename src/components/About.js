import React from 'react'
import { canUseWebP } from "react-img-webp";
const isBrowserSupportWebP = canUseWebP(); 

class About extends React.Component {
    render() {
        return (        
        <div id="colorlib-content">
        <div className="video colorlib-video" style={{backgroundImage: `url(${ isBrowserSupportWebP ? "images/dad3.webp" : "images/dad3.jpeg"})`, transform: 'rotate(0deg)'}}>
         
        </div>
        <div className="choose animate-box">
            <div className="colorlib-heading">
                <h2>44 Years of Experience in Worker's Comp</h2>
                <p>Getting injured in the workplace can be physically, financially, and mentally draining for everyone involved. If you have been injured on the job, you must navigate through the insurance process for injuries. We will help you navigate the insurance process to receiving the highest compensation for your injury. Without a seasoned Worker's Compensation attorney such as Jeffery Klein, you can fall victim to several pitfalls along the way that would permanently affect your case and compensation. We are here to help you every step of the way.</p>
            </div>
       </div>
    </div>)
    }
}

export default About;