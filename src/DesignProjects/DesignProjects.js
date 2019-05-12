import React, { Component } from 'react';


class DesignProjects extends Component {

    render(){
        return(
            <div>
                <p>This will be a page with some design projects.</p>

                <div className="project-page" >
                    <div className="project" >
                        <img src="something.jpeg" alt="YOXO" />
                        <h3>YOXO</h3>
                        <p>This is a description of YOXO-Copter.</p>
                    </div>

                    <div className="project" >
                        <img src="something.jpeg" alt="playard" />
                        <h3>Playard Sandwich</h3>
                        <p>This is a description of Playard Sandwich.</p>
                    </div>

                    <div className="project" >
                        <img src="something.jpeg" alt="Angled Bin" />
                        <h3>Angled Bin</h3>
                        <p>This is a description of Madesmart Angled Bin.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignProjects;