import React, { useState } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css'; 

function Contact() {
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] =useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleMessageInput = (e) => {
       // console.log(e)
        setMessage({ [e.target.name]: e.target.value })
    }
    const handleSubjectInput = (e) => {
        // console.log(e)
         setSubject({ [e.target.name]: e.target.value })
     }
     const handleEmailInput = (e) => {
        // console.log(e)
         setEmail({ [e.target.name]: e.target.value })
     }
     const handleFirstNameInput = (e) => {
        // console.log(e)
         setFirstName({ [e.target.name]: e.target.value })
     }
     const handleLastNameInput = (e) => {
        // console.log(e)
         setLastName({ [e.target.name]: e.target.value })
     }

    const sendEmail = () => {
        let data = {
            message: message,
            subject: subject,
            fromEmail: email,
        }
        fetch('https://2myf2chggi.execute-api.us-east-1.amazonaws.com/Prod/send/', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response);
            if (response.status === 200) {
                setMessage('')
                setSubject('')
                setEmail('')
                setFirstName('')
                setLastName('')
                NotificationManager.success('Success', 'Your message has been sent and we will respond to you as soon as we can', 2000)
            }
            else {
                NotificationManager.error('Error', 'An error occurred while trying to email our office a message. Please try again or call us at the number below', 5000);
            }
        })
    }

        return (
            <div id="colorlib-consult">
            <div className="video" style={{backgroundImage: `url("images/dad1.webp")`}}>
            </div>
            <div className="choose choose-form animate-box">
                <div className="colorlib-heading">
                    <h2>Contact Us</h2>
                </div>
                <form action="#">
                    <div className="row form-group">
                        <div className="col-md-6">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" onChange={handleFirstNameInput} value={firstName} name="firstName" className="form-control" placeholder="Your first name"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" name="lastName" onChange={handleLastNameInput} value={lastName} className="form-control" placeholder="Your last name"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="email">Email</label> 
                            <input type="text" name="email" onChange={handleEmailInput} value={email} className="form-control" placeholder="Your email address"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" onChange={handleSubjectInput} value={subject} className="form-control" placeholder="Your subject of this message"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" onChange={handleMessageInput} value={message} cols="30" rows="3" className="form-control" placeholder="Say something to us"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="button" value="Send Message" onClick={sendEmail} className="btn btn-primary"/>
                    </div>
    
                </form>	
            </div>
            <NotificationContainer/>
        </div>
        )
}

export default Contact;