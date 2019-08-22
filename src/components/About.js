import React from 'react'

class About extends React.Component {
    render() {
        return (        
        <div id="colorlib-content">
        <div className="video colorlib-video" style={{backgroundImage: 'url(images/img_bg_3.jpg)'}}>
            
            <div className="overlay"></div>
        </div>
        <div className="choose animate-box">
            <div className="colorlib-heading">
                <h2>38 Years of Experience in Worker's Comp</h2>
                <p>Being injured in the workplace can be physically, financially, and mentally draining for everyone involved. The high cost of litigation, the length of time it takes to settle a case, and other variables were all taken into consideration when the State of California created its Workers' Compensation Compromise. If you have been injured on the job or because of a job-related activity you must navigate through the insurance process designated in the State of California for injuries. The various steps in the process will dictate your ultimate settlement and compensation and mistakes along the way can have deleterious effect upon the amount settled upon you which is why it is helpful and in many cases vital in Orange County to have a seasoned Workers' Comp attorney such as Jeffery Klein walk you through the process.</p>
            </div>
       </div>
    </div>)
    }
}

export default About;