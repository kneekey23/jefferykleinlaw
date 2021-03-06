import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { canUseWebP } from "react-img-webp";
import 'react-notifications/lib/notifications.css';
const isBrowserSupportWebP = canUseWebP(); 

class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
            subject: '',
            email: '',
            firstName: '',
            lastName: ''
        }

        this.sendEmail = this.sendEmail.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
       // console.log(e)
        this.setState({ [e.target.name]: e.target.value })
    }

    sendEmail() {
        let data = {
            message: this.state.message,
            subject: this.state.subject,
            fromEmail: this.state.email,
           
        }
        fetch('https://2myf2chggi.execute-api.us-east-1.amazonaws.com/Prod/send/', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response);
            if (response.status === 200) {
                this.setState({message: '', subject: '', email: '', firstName: '', lastName: ''})
                NotificationManager.success('Success', 'Your message has been sent and we will respond to you as soon as we can', 2000)
            }
            else {
                NotificationManager.error('Error', 'An error occurred while trying to email our office a message. Please try again or call us at the number below', 5000);
            }
        })
    }

    render() {
        return (
            <div id="colorlib-consult">
            <div className="video" style={{backgroundImage: `url(${ isBrowserSupportWebP ? "images/dad1.webp" : "images/dad1.jpeg"})`}}>
            </div>
            <div className="choose choose-form animate-box">
                <div className="colorlib-heading">
                    <h2>Contact Us</h2>
                </div>
                <form action="#">
                    <div className="row form-group">
                        <div className="col-md-6">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" onChange={this.onChange} value={this.state.firstName} name="firstName" className="form-control" placeholder="Your first name"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" name="lastName" onChange={this.onChange} value={this.state.lastName} className="form-control" placeholder="Your last name"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="email">Email</label> 
                            <input type="text" name="email" onChange={this.onChange} value={this.state.email} className="form-control" placeholder="Your email address"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" onChange={this.onChange} value={this.state.subject} className="form-control" placeholder="Your subject of this message"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" onChange={this.onChange} value={this.state.message} cols="30" rows="3" className="form-control" placeholder="Say something to us"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="button" value="Send Message" onClick={this.sendEmail} className="btn btn-primary"/>
                    </div>
    
                </form>	
            </div>
            <NotificationContainer/>
        </div>
        )
    }
}

export default Contact;