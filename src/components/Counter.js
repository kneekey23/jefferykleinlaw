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
                    <span className="colorlib-counter js-counter" data-from="0" data-to="1539" data-speed="5000" data-refresh-interval="50"></span>
                    <span className="colorlib-counter-label">Qualified Lawyer</span>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <span className="icon"><i className="flaticon-courthouse"></i></span>
                    <span className="colorlib-counter js-counter" data-from="0" data-to="3653" data-speed="5000" data-refresh-interval="50"></span>
                    <span className="colorlib-counter-label">Trusted Clients</span>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <span className="icon"><i className="flaticon-libra"></i></span>
                    <span className="colorlib-counter js-counter" data-from="0" data-to="5987" data-speed="5000" data-refresh-interval="50"></span>
                    <span className="colorlib-counter-label">Successful Case</span>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <span className="icon"><i className="flaticon-police-badge"></i></span>
                    <span className="colorlib-counter js-counter" data-from="0" data-to="3999" data-speed="5000" data-refresh-interval="50"></span>
                    <span className="colorlib-counter-label">Honor &amp; Awards</span>
                </div>
            </div>
        </div>
    </div>)
    }
}

export default Counter;