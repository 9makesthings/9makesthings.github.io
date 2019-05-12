import React, { Component } from 'react';
import './DevProjects.css';

class DevProjects extends Component {

    render(){
        return(
            <div>
                <p>This will be a page with some development projects.</p>

                <div className="project-page" >
                    <div className="project" >
                        <img src="something.jpeg" alt="PaddleNorth" />
                        <h3>PaddleNorth</h3>
                        <p>This is a description of PaddleNorth.</p>
                    </div>

                    <div className="project" >
                        <img src="something.jpeg" alt="PaddleNorth" />
                        <h3>Group Project</h3>
                        <p>This is a description of PaddleNorth.</p>
                    </div>

                    <div className="project" >
                        <img src="something.jpeg" alt="PaddleNorth" />
                        <h3>Feedback Form</h3>
                        <p>This is a description of PaddleNorth.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DevProjects;