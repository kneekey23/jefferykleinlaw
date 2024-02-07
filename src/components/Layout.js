import React from 'react';
import Counter from './Counter';
import Timeline from './Timeline';
import About from './About';
import Practice from './Practice';
import Contact from './Contact';
import Map from './Map';

function Layout() {
        return (
        <div>
        <div className="colorlib-loader"></div>
	
        <div id="page">
        <nav className="colorlib-nav" role="navigation">
            <div className="top-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            <div id="colorlib-logo">
                                <a href="/">
                                <img alt="Law Offices of Jeffery M Klein Logo" src="/images/logo.webp" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 hidden-xs phoneNumberStyle">
                            <span className="phoneNumberText">call for a free consultation</span><a className="phoneNumber" href="tel:(714) 505-5402">(714) 505-5402</a>
                            <p><span className="phoneNumberText">or text us at</span><a className="phoneNumber" href="tel:(714) 253-2504">(714) 253-2504</a></p>
                        </div>
                        <div className="col-md-6 text-right menu-1">
                            <ul>
                                <li className="active"><a href="#colorlib-content">About</a></li>
                                <li><a href="#colorlib-practice">Services</a></li>
                                <li><a href="#colorlib-consult">Contact</a></li> 
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    
        <aside id="colorlib-hero" className="js-fullheight">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                   <li style={ {backgroundImage : `url("images/img_bg_2.webp")`} }>
                       <div className="overlay-gradient"></div>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                   <div className="slider-text-inner">
                                       <h1>Law Offices of Jeffery Klein</h1>
                                        <h2>Worker’s Compensation Attorney | Top Attorneys in California</h2>
                                        <p><a className="btn btn-primary btn-lg" href="#colorlib-consult">Contact Us</a></p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
                   <li style={{backgroundImage: `url("images/gavel.webp")`}}>
                       <div className="overlay-gradient"></div>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                   <div className="slider-text-inner">
                                        <h1>Law Offices of Jeffery M Klein</h1>
                                        <h2>Orange County Worker’s Compensation Attorney</h2>
                                        <p><a className="btn btn-primary btn-lg btn-learn" href="#colorlib-consult">Contact Us</a></p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
                   <li style={{backgroundImage: `url("images/books.webp")`}}>
                       <div className="overlay-gradient"></div>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                   <div className="slider-text-inner">
                                   <h1>Law Offices of Jeffery M Klein</h1>
                                        <h2>Orange County Worker’s Compensation Attorney</h2>
                                        <p><a className="btn btn-primary btn-lg btn-learn" href="#colorlib-consult">Contact Us</a></p>
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
                        <h2>We are here to fight and protect you!</h2>
                        <p>As one of Orange County's top Workers' Compensation Attorneys, Jeffery Klein is dedicated to providing his clients with all the knowledge they need to get them through these difficult times. He has represented both sides of the business, starting his career as a claims adjustor, then moving to become a defense attorney and finally now solely representing the injured worker. With this knowledge of the entire scope of the business, he is able to foresee all possible moves and effectively navigate your case.</p>
                    </div>
                    <div className="third-col third-col-color">
                        <span className="icon"><i className="icon-old-phone"></i></span>
                        <h2>Call or text us now for a FREE Consultation at (714) 505-5402</h2>
                        <h2>Or text us at (714) 253-2504</h2>
                        <h2>Or email us at <a href="mailto:jefferykleinlaw@aol.com">contact@jefferymkleinlaw.com</a></h2>
                        <p>If you have any questions about a Workers' Compensation case, an injury that took place while at work or any other questions regarding Workers' Compensation, please either contact us below or stop by our office.</p>
                    </div>
                </div>
            </div>
        </div>

       <About />
       <div id="colorlib-started" style={{backgroundImage:`url("images/books.webp")`}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center colorlib-heading colorlib-heading2">
                        <h2>44 Years of Experience in Various Cases</h2>
                        <p>We help people effectively receive compensation for their work injury and get their lives back!</p>
                        <p><a href="/" className="btn btn-primary btn-lg">Consultation</a></p>
                    </div>
                </div>
            </div>
        </div>
       <Timeline />
       <Counter />
       <Practice />
       <Contact />
       <Map />
        <footer id="colorlib-footer" role="contentinfo">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-3 colorlib-widget">
                        <h4>Law Offices of Jeffery M Klein</h4>
                        <p>WORKERS COMPENSATION ATTORNEY</p>
                    </div>
                    <div className="col-md-3 col-md-push-1">
                        <h4>Navigation</h4>
                        <ul className="colorlib-footer-links">
                            <li><a href="/">Features</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                            
                        </ul>
                    </div>
    
                    <div className="col-md-3 col-md-push-1">
                        <h4>Contact Information</h4>
                        <ul className="colorlib-footer-links">
                            <li>1600 E 4th St #240 <br/> Santa Ana, CA 92701</li>
                            <li><a href="tel://1714505-5402">(714) 505-5402</a></li>
                            <li><a href="mailto:contact@jefferymkleinlaw.com">contact@jefferymkleinlaw.com</a></li>
                        </ul>
                    </div>
    
                    <div className="col-md-3 col-md-push-1">
                        <h4>Opening Hours</h4>
                        <ul className="colorlib-footer-links">
                            <li>Mon - Thu: 9:00AM - 5:00PM</li>
                            <li>Fri 9:00AM - 4:00PM</li>
                        </ul>
                    </div>
    
                </div>
    
                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <p>
                        <small className="block">&copy; 1999 Law Offices of Jeffery M Klein. All Rights Reserved. Created by Nicki Stone.</small> 
                        </p>
                            <ul className="colorlib-social-icons">
                                <li><a href="https://www.linkedin.com/in/jeffery-klein-15433284/"><i className="icon-linkedin"></i></a></li>
                            </ul>
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

export default Layout;