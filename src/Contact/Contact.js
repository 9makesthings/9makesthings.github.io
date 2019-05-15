import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Contact.css';

class Contact extends Component {

    render(){
        return(
            <div>
                <div className="contact-img" >
                    <img src="images/Web_images/Nina_-55043.jpg" alt="Nina Johnson" />
                </div>

                <div className="contact" >
                    <div className="left" >
                        <p>
                            <br/>
                            If you'd like to get in touch with me, 
                            <br/>you've come to the right place.</p>
                    </div>

                    <div className="right" >
                        <p>
                            {/* cargocollective.com/9makesthings<br/> */}
                            <a href="mailto:9makesthings@gmail.com">
                                <i class="far fa-envelope"></i> &nbsp; 9makesthings@gmail.com
                            </a><br/>
                            {/* 651.895.4286<br/> */}
                            <a href="http://github.com/9makesthings">
                                <i class="fab fa-github"></i> &nbsp; github.com/9makesthings
                            </a><br/>
                            <a href="http://www.linkedin.com/in/ninajjohnson">
                                <i class="fab fa-linkedin-in"></i> &nbsp; linkedin.com/in/ninajjohnson
                            </a><br/>
                            {/* <SocialIcon className="social-icon" url="mailto:9makesthings@gmail.com" /> &#9; */}
                            {/* <SocialIcon className="social-icon" url="http://github.com/9makesthings" /> &#9;
                            <SocialIcon className="social-icon" url="http://www.linkedin.com/in/ninajjohnson" />  */}
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;