import React from 'react';

class Timeline extends React.Component {
    render() {
        return( 
        <div id="colorlib-timeline">
        <div className="container timeline">
        <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center">
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
                <h2>1985</h2>
                <p>American College of Law, J.D.</p>
                </div>
            </div>
            <div className="timepoint left">
                <div className="content">
                <h2>1988</h2>
                <p>Insurance Educational Association</p>
                </div>
            </div>
            <div className="timepoint right">
                <div className="content">
                <h2>1991</h2>
                <p>Supreme Court of the State of California (became an attorney)</p>
                </div>
            </div>
            <div className="timepoint left">
                <div className="content">
                <h2>2001</h2>
                <p>United State District Central Court</p>
                </div>
            </div>
            <div className="timepoint right">
                <div className="content">
                <h2>2002</h2>
                <p>Founded Law Corporation</p>
                </div>
            </div>
        </div>
    </div>)
    }
}
export default Timeline;