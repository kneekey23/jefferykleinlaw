import React from 'react';

class Practice extends React.Component {
    render() {
        return (        <div id="colorlib-practice">
        <div className="container">
            <div className="row animate-box">
                <div className="col-md-8 col-md-offset-2 text-center colorlib-heading">
                    <h2>Practice Areas</h2>
                    <p>Jeff handles many different areas of practice within Worker's Compensation.If you have any of the below injury types, he has expertise in all of them and more.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 text-center animate-box">
                    <div className="services">
                        <span className="icon">
                            <i className="flaticon-courthouse"></i>
                        </span>
                        <div className="desc">
                            <h3>Carpal Tunnel</h3>
                          
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services">
                        <span className="icon">
                            <i className="flaticon-padlock"></i>
                        </span>
                        <div className="desc">
                            <h3>Hearing Loss</h3>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services">
                        <span className="icon">
                            <i className="flaticon-folder"></i>
                        </span>
                        <div className="desc">
                            <h3>Spinal Injury</h3>
                           
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services">
                        <span className="icon">
                            <i className="flaticon-handcuffs"></i>
                        </span>
                        <div className="desc">
                            <h3>UPS Injuries</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
    }
}
export default Practice;