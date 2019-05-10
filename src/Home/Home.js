import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


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
                <p className="about-me" >A paragraph about me...</p>

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
                            <img src="https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
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