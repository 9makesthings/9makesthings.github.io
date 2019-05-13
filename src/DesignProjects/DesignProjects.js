import React, { Component } from 'react';


class DesignProjects extends Component {

    render(){
        return(
            <div>
                {/* <p className="projects-description" >This will be a page with some design projects.</p> */}

                <div className="project-page" >
                    <div className="project" >
                        <div className="project-image">
                            <img src="images/design/YOXO-Hilo.jpg" alt="YOXO" />
                        </div>
                        <h3>YOXO</h3>
                        <p>This is a description of YOXO-Copter.</p>
                    </div>

                    <div className="project" >
                        <div className="project-image">
                            <img src="images/design/slopedbin-product.jpg" alt="Angled Bin" />
                        </div>
                        <h3>Angled Bin</h3>
                        <p>This is a description of Madesmart Angled Bin.</p>
                    </div>

                    <div className="project" >
                        <div className="project-image">
                            <img src="images/design/Playard_wBaby.png" alt="playard" />
                        </div>
                        <h3>Playard Sandwich</h3>
                        <p>This is a description of Playard Sandwich.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignProjects;