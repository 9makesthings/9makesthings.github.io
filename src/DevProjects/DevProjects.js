import React, { Component } from 'react';
import './DevProjects.css';

// import PaddleNorth from '../PaddleNorth/PaddleNorth';

class DevProjects extends Component {

    render(){
        return(
            <div>
                {/* <p className="projects-description" >This will be a page with some development projects.</p> */}

                {/* <PaddleNorth /> */}

                <div className="project-page" >
                    <div className="project" >
                        <div className="project-image">
                            <img src="images/Web_images/home.jpg" alt="PaddleNorth" />
                        </div>
                        <h3>PaddleNorth</h3>
                        <p>I built PaddleNorth to provide a user-friendly and informational guide to planning a trip to the Boundary Waters. The goal is to remove any barriers or lessen anxiety about making a trip for the first time and assist more seasoned paddlers in planning future trips.
                            <br/><br/>
                            <a href="https://github.com/9makesthings/bwca-trip-planner" >Github</a>
                            {/* <a href="" >Website</a> */}
                        </p>
                    </div>

                    <div className="project" >
                        <div className="project-image">
                            <img src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1990&q=80" alt="High Tech Kids" />
                        </div>
                        <h3>High Tech Kids Scorecard</h3>
                        <p>This is a project for High Tech Kids, a local non-profit that supports and partners with FIRST to offer training and tournament opportunities for Lego robotics competitions. The app will allow kids and their coaches to score and track their practice sessions during training.</p>
                    </div>

                    <div className="project" >
                        <div className="project-image">
                            <img src="images/Web_images/feedback-form1.jpg" alt="Feedback App" />
                        </div>
                        <h3>Feedback Form</h3>
                        <p>This is a basic app that allows users to enter feedback via rating on several points and allows them to add comments. Users submit their feedback, which can then be viewed and managed by an adminstrator.
                            <br/><br/>
                            <a href="https://github.com/9makesthings/react-feedback-form" >Github</a>
                            {/* <a href="" >Website</a> */}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DevProjects;