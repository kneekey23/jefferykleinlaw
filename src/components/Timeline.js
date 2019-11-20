import React from 'react';

class Timeline extends React.Component {
    render() {
        return( 
        <div id="colorlib-timeline">
        <div className="container timeline">
        <div className="row animate-box">
                    <div className="col-md-6 text-center historyTitle">
                        <h2>My History</h2>
                    </div>
                </div>

            <div className="timepoint left">
                <div className="content">
                <h2>1981</h2>
                <p>University of California Los Angeles, B.A.</p>
                </div>
            </div>
            <div className="timepoint right">
                <div className="content">
                <h2>1984</h2>
                <p>Became a W.C. Claims Adjustor for All State & Northbrook Insurance Co.</p>
                </div>
            </div>
            <div className="timepoint left">
                <div className="content">
                <h2>1985</h2>
                <p>American College of Law, J.D.</p>
                <p>American JurisPrudence Award in Workers' Compensation Law</p>
                </div>
            </div>
            <div className="timepoint right">
                <div className="content">
                <h2>1988</h2>
                <p>Insurance Education Association Certification</p>
                </div>
            </div>
            <div className="timepoint left">
                <div className="content">
                <h2>1991</h2>
                <p>Member of the California State Bar</p>
                </div>
            </div>
            <div className="timepoint right">
                <div className="content">
                <h2>2001</h2>
                <p>Member of the United State District Central Court</p>
                </div>
            </div>
            <div className="timepoint left">
                <div className="content">
                <h2>2010</h2>
                <p>Orange County Sheriffs' Panelist List</p>
                </div>
            </div>
            <div className="timepoint right">
                <div className="content">
                <h2>2016</h2>
                <p>Panel of MBA Legends of Basketball</p>
                </div>
            </div>
        </div>
    </div>)
    }
}
export default Timeline;