import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';

class Home extends Component {

    designPath = () => {
        this.props.history.push('/design')
    }

    devPath = () => {
        this.props.history.push('/development')
    }

    render(){
        return(
            <div>
                <div className="about-me" >
                    {/* <h2>Welcome!</h2> */}
                    <p>I'm a product developer with a passion for helping people.<br/> My goal is to create products that inspire, bring joy, meet a need, or all of the above.</p>

                    <p><br/>Click through to see some projects I've worked on!</p>
                </div>

                <div className="home-buttons" >
    
                    <div className="design-link"
                        onClick={this.designPath} >
                        <div className="home-image">
                            <img src="https://images.unsplash.com/photo-1514063364532-5abd25e38290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                            alt="Design Projects" />
                        </div>
                        <h3>Industrial Design</h3>
                    </div>


                    {/* <Link path="/design" component={DevProjects} /> */}
                    <div className="dev-link"
                        onClick={this.devPath} >
                        <div className="home-image">
                            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                            alt="Dev Projects" />
                        </div>
                        <h3>Software Development</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);