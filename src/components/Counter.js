import React from 'react';

class Counter extends React.Component {

    render() {
        return (
    <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/img_bg_3.jpg)'}} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 text-center animate-box">
                    <span className="icon"><i className="flaticon-lawyer-1"></i></span>
                    <span className="colorlib-counter js-counter" data-from="0" data-to="10000" data-speed="5000" data-refresh-interval="50"></span>
                    <span className="colorlib-counter-label">Successful Cases Completed</span>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <span className="icon"><i className="flaticon-courthouse"></i></span>
                    <span className="colorlib-counter js-counter" data-from="0" data-to="90" data-speed="5000" data-refresh-interval="50"></span><span className="colorlib-counter-percent">%</span>
                    <span className="colorlib-counter-label">Success Rate</span>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <span className="icon"><i className="flaticon-libra"></i></span>
                    <span className="colorlib-counter js-counter" data-from="0" data-to="100" data-speed="5000" data-refresh-interval="50"></span><span className="colorlib-counter-percent">%</span>
                    <span className="colorlib-counter-label">Permanent Disability Awards through Trial</span>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <span className="icon"><i className="flaticon-police-badge"></i></span>
                    <span className="colorlib-counter js-counter" data-from="0" data-to="100" data-speed="5000" data-refresh-interval="50"></span><span className="colorlib-counter-percent">%</span>
                    <span className="colorlib-counter-label">Positive Feedback</span>
                </div>
            </div>
        </div>
    </div>)
    }
}

export default Counter;