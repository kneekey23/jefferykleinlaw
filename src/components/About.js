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
                <p>Getting injured in the workplace can be physically, financially, and mentally draining for everyone involved. We will help you every step of the way including navigating through the insurance process to receive the <b>highest compensation</b> for your injury. Jeffery Klein is a caring honest attorney with 44 years of experience who has represented both sides of litigation and has successfully won awards of 1M+ for his clients.</p>
            </div>
       </div>
    </div>)
    }
}

export default About;