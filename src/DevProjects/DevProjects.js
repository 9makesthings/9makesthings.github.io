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
                            <img src="images/screenshots/home.png" alt="PaddleNorth" />
                        </div>
                        <h3>PaddleNorth</h3>
                        <p>This is a description of PaddleNorth.</p>
                    </div>

                    <div className="project" >
                        <div className="project-image">
                            <img src="something.jpeg" alt="Group Project" />
                        </div>
                        <h3>High Tech Kids</h3>
                        <p>This is a description of a group project we have yet to do.</p>
                    </div>

                    <div className="project" >
                        <div className="project-image">
                            <img src="images/feedback-form1.png" alt="Feedback App" />
                        </div>
                        <h3>Feedback Form</h3>
                        <p>This is a description of a feedback app I made over a weekend.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DevProjects;