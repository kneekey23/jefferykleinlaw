import React from 'react';
import Counter from './Counter';
import Timeline from './Timeline';
import About from './About';
import Practice from './Practice';

class Layout extends React.Component {
    render() {
        return (
        <div>
        <div className="colorlib-loader"></div>
	
        <div id="page">
        <nav className="colorlib-nav" role="navigation">
            <div className="top-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div id="colorlib-logo"><a href="/"><img src="/images/logo.png" /></a></div>
                        </div>
                        <div className="col-md-10 text-right menu-1">
                            <ul>
                                <li className="active"><a href="index.html">Features</a></li>
                                <li><a href="practice.html">About</a></li>
                                <li><a href="won.html">Services</a></li>
                                <li><a href="about.html">Contact</a></li> 
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    
        <aside id="colorlib-hero" className="js-fullheight">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                   <li style={ {backgroundImage : "url('images/img_bg_2.jpg')"} }>
                       <div className="overlay-gradient"></div>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                   <div className="slider-text-inner">
                                       <h1>Law Offices of Jeffery M Klein</h1>
                                        <h2>Orange County Worker’s Compensation Lawyer</h2>
                                        <p><a className="btn btn-primary btn-lg" href="/">Make An Appointment</a></p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
                   <li style={{backgroundImage: 'url(images/gavel.jpg)'}}>
                       <div className="overlay-gradient"></div>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                   <div className="slider-text-inner">
                                        <h1>Law Offices of Jeffery M Klein</h1>
                                        <h2>Orange County Worker’s Compensation Lawyer</h2>
                                        <p><a className="btn btn-primary btn-lg btn-learn" href="/">Make An Appointment</a></p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
                   <li style={{backgroundImage: 'url(images/books.jpg)'}}>
                       <div className="overlay-gradient"></div>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                   <div className="slider-text-inner">
                                   <h1>Law Offices of Jeffery M Klein</h1>
                                        <h2>Orange County Worker’s Compensation Lawyer</h2>
                                        <p><a className="btn btn-primary btn-lg btn-learn" href="/">Make An Appointment</a></p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>		   	
                  </ul>
              </div>
        </aside>
        <div id="intro-bg">
            <div className="container">
                <div id="colorlib-intro">
                    <div className="third-col">
                        <span className="icon"><i className="icon-cog"></i></span>
                        <h2>Need a Workers' Comp Attorney?</h2>
                        <p>As one of Orange County's top Workers' Compensation Lawyers, Jeffery Klein is dedicated to providing his clients with all the knowledge they need to get them through these difficult times. </p>
                    </div>
                    <div className="third-col third-col-color">
                        <span className="icon"><i className="icon-old-phone"></i></span>
                        <h2>Call now at (714) 505-5402</h2>
                        <h2>Email us at <a href="mailto:jefferykleinlaw@aol.com">Jefferykleinlaw@aol.com</a></h2>
                        <p>If you have any questions about a Workers' Compensation case, an injury that took place while at work or any other questions regarding Workers' Compensation, please either contact us below or stop by our office.</p>
                    </div>
                </div>
            </div>
        </div>

       <About />
       <div id="colorlib-started" style={{backgroundImage:'url(images/img_bg_2.jpg)'}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center colorlib-heading colorlib-heading2">
                        <h2>30 Years of Experienced in Various cases</h2>
                        <p>We help people effectively receive compensation for their work injury and get their lives back!</p>
                        <p><a href="/" className="btn btn-primary btn-lg">Consultation</a></p>
                    </div>
                </div>
            </div>
        </div>
       <Timeline />
       <Counter />
       <Practice />
    

        
    
        <div id="colorlib-consult">
            <div className="video colorlib-video" style={{backgroundImage: 'url(images/video.jpg)'}} data-stellar-background-ratio="0.5">
            </div>
            <div className="choose choose-form animate-box">
                <div className="colorlib-heading">
                    <h2>Free Legal Consultation</h2>
                </div>
                <form action="#">
                    <div className="row form-group">
                        <div className="col-md-6">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" className="form-control" placeholder="Your firstname"/>
                        </div>
                        <div className="col-md-6">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" className="form-control" placeholder="Your lastname"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label for="email">Email</label> 
                            <input type="text" id="email" className="form-control" placeholder="Your email address"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" className="form-control" placeholder="Your subject of this message"/>
                        </div>
                    </div>
    
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send Message" className="btn btn-primary"/>
                    </div>
    
                </form>	
            </div>
        </div>

       
            
        <footer id="colorlib-footer" role="contentinfo">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-3 colorlib-widget">
                        <h4>Lawfirm</h4>
                        <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                    </div>
                    <div className="col-md-3 col-md-push-1">
                        <h4>Navigation</h4>
                        <ul className="colorlib-footer-links">
                            <li><a href="https://google.com">Home</a></li>
                            <li><a href="https://google.com">Practice Areas</a></li>
                            <li><a href="https://google.com">Won Cases</a></li>
                            <li><a href="https://google.com">Blog</a></li>
                            <li><a href="https://google.com">About us</a></li>
                        </ul>
                    </div>
    
                    <div className="col-md-3 col-md-push-1">
                        <h4>Contact Information</h4>
                        <ul className="colorlib-footer-links">
                            <li>198 West 21th Street, <br/> Suite 721 New York NY 10016</li>
                            <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                            <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                        </ul>
                    </div>
    
                    <div className="col-md-3 col-md-push-1">
                        <h4>Opening Hours</h4>
                        <ul className="colorlib-footer-links">
                            <li>Mon - Thu: 9:00 - 21 00</li>
                            <li>Fri 8:00 - 21 00</li>
                            <li>Sat 9:30 - 15: 00</li>
                        </ul>
                    </div>
    
                </div>
    
                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <p>
                        <small className="block">&copy; 2018 LawFirm. All Rights Reserved. Created by <a href="https://colorlib.com/" rel="noopener noreferrer" target="_blank">Colorlib</a></small> 
                        <small className="block">Demo Images: <a href="http://unsplash.co/" rel="noopener noreferrer" target="_blank">Unsplash</a></small>
                        </p>
                        <p>
                            <ul className="colorlib-social-icons">
                                <li><a href="https://google.com"><i className="icon-twitter"></i></a></li>
                                <li><a href="https://google.com"><i className="icon-facebook"></i></a></li>
                                <li><a href="https://google.com"><i className="icon-linkedin"></i></a></li>
                                <li><a href="https://google.com"><i className="icon-dribbble"></i></a></li>
                            </ul>
                        </p>
                    </div>
                </div>
    
            </div>
        </footer>
        </div>
    
        <div className="gototop js-top">
            <a href="/" className="js-gotop"><i className="icon-arrow-up"></i></a>
        </div>
        </div>
        )
    }
}

export default Layout;