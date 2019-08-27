import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div id="colorlib-consult">
            <div className="video" style={{backgroundImage: 'url(images/dad1.jpeg)', transform: 'rotate(90deg)'}}>
            </div>
            <div className="choose choose-form animate-box">
                <div className="colorlib-heading">
                    <h2>Contact Us</h2>
                </div>
                <form action="#">
                    <div className="row form-group">
                        <div className="col-md-6">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" className="form-control" placeholder="Your first name"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" className="form-control" placeholder="Your last name"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="email">Email</label> 
                            <input type="text" id="email" className="form-control" placeholder="Your email address"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" className="form-control" placeholder="Your subject of this message"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Say something to us"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send Message" className="btn btn-primary"/>
                    </div>
    
                </form>	
            </div>
        </div>
        )
    }
}

export default Contact;