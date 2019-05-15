import React, { Component } from 'react';


class DesignProjects extends Component {

    render(){
        return(
            <div>
                {/* <p className="projects-description" >This will be a page with some design projects.</p> */}

                <div className="project-page" >
                    <div className="project" >
                        <div className="project-image">
                            <img src="images/Web_images/YOXO-Hilo.jpg" alt="YOXO" />
                        </div>
                        <h3>YOXO</h3>
                        <p>Designed and rendered YOXO® creation for St. Paul
                            local toy company, Play From Scratch. The task was
                            to create new assembly ideas for the construction
                            toy and design a layout for one-page instructional
                            material of simple assembly.
                            <br/><br/>
                            <a href="http://www.yoxo.com/yoxo-hilo-helicopter-construction-toy/">YOXO®</a>
                        </p>
                    </div>

                    <div className="project" >
                        <div className="project-image">
                            <img src="images/Web_images/slopedbin-product.jpg" alt="Angled Bin" />
                        </div>
                        <h3>Angled Bin</h3>
                        <p>I developed this idea for a sloping bin that could
                            house an entire beauty routine, holding both small and large
                            items with clear sight of smaller items. These were developed to stack with a family of vanity bins and are being sold by The Container Store.
                            <br/><br/>
                            <a href="https://www.containerstore.com/s/bath/makeup-organizers/madesmart-stackable-makeup-system/12d?productId=11007641" >The Container Store</a>
                        </p>
                    </div>

                    <div className="project" >
                        <div className="project-image">
                            <img src="images/Web_images/Playard_wBaby.jpg" alt="playard" />
                        </div>
                        <h3>Playard Sandwich</h3>
                        <p>This idea was born out of wanting to simplify the process in which a
                            parent sets up and packs away a play yard while eliminating the need to bend over 
                            the rail to lock and unlock the frame for mothers who are recovering from 
                            c-sections. The entire system also packs away flat
                            for more convenient storage.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignProjects;