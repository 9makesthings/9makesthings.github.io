import React, { Component } from 'react';
import './Resume.css';

const Resume = () => {

    return (
        <div class="container">

            {/* <h1><b>Nina Johnson</b></h1> */}

            {/* <p id="contact">
                cargocollective.com/9makesthings<br/>
                9makesthings@gmail.com<br/>
                651.895.4286
            </p> */}


            <h3>Skills</h3>
            <div className="dev-skills" >
                <h5>Software</h5>
                <p>
                    React &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Redux <br/>	
                    Sagas &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Javascript <br/>
                    jQuery &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Git <br/>
                    HTML &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;CSS<br/>
                    Material UI &nbsp; &nbsp; Bootstrap <br/>
                    Node.js &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; postgreSQL <br/>
                </p>
            </div>
            <div className="design-skills" >
                <h5>Industrial Design</h5>
                <p>
                    CAD Design &nbsp; &nbsp;Solidworks <br/>
                    Rendering &nbsp; &nbsp; &nbsp;  Keyshot, Photoview 360 <br/>
                    Adobe CC &nbsp; &nbsp; &nbsp; &nbsp;Illustrator, InDesign, Photoshop <br/>
                    Prototyping &nbsp; &nbsp;3D Printing, Woodworking, <br/> 
                    &nbsp; &nbsp; &nbsp; &nbsp; Thermoforming, Painting, Finishing
                </p>
            </div>

            <h3>Experience</h3>

            <p class="job-title"> <b>Prime Digital Academy</b> | January 2019 to Present
                <br/><b>Software Development Student</b></p>
                <p>
                    Learning full stack development in an immersive, practice-driven program <br/><br/>
                        <b>Solo Project | BWCA Trip Planner</b><br/>
                        Application to relieve burden of planning a trip to the Boundary Waters<br/>
                        User navigates through steps of trip planning with assistance and helpful tips<br/>
                        Account holds trip plan information so user can view upcoming and past trips and make changes<br/>
                        Building this app with React, Redux, Sagas, Node.js, postgreSQL, Material UI, and CSS <br/><br/>
                        <b>Group Project | TBD</b><br/>
                        Client-driven project with a group of 3 to 4 of my peers
                </p>

            <p class="job-title">
                <b>Industrial Designer</b> Regalo International | July to October 2018
                <br/>
            </p>
                <p>
                    Research various categories in baby products to develop new ideas and expand Regalo's current offerings.<br/> 
                    Sketch a large variety of ideas within a category for exploration and selection.<br/>
                    Develop concepts through sketching and CAD, taking user feedback into consideration. <br/>
                    Create presentations of final ideas for review and plan next steps in prototyping and manufacturing.
                </p>

            <p class="job-title">
                <b>Product Designer</b> Madesmart | February 2016 to February 2018
                <br/>
            </p>
                <p>
                    Design and develop new product concepts for home organization with the team.<br/> 
                    Revisit current product to redesign for efficiency and optimization.<br/>
                    Build prototypes of concepts for testing and presentation. <br/>
                    Research trends, organize information into presentable material, and choose color palettes.
                </p>

            <p class="job-title"> 
                <b>Bracketron, Inc</b> | February 2015 to February 2016
                <br/><b>Senior Product Designer</b> | November 2015 to February 2016
            </p>
                <p>
                    Led design team in brainstorming sessions of new ideas and week-to-week project management<br/>
                    Developed and deployed process by which we carry ideas through from concept to final product
                </p>

            <p class="job-title">
                <b>Product Designer</b> | February 2015 to November 2015
            </p>
                <p>
                    Designed and developed new product and packaging concepts <br/>
                    Rendered CAD model concepts and create prototypes to convey and test ideas
                </p>

            <h3>Volunteer</h3>
            <p class="job-title">
                <b>Lab Instructor, Toy Product Design</b> <br/> 
                College of Design, U of M | Spring semesters 2013 to 2016, 2018
            </p>
                <p>
                    Guide a team of students through the design process from brainstorming to presentation.<br/>
                    Teach my team a variety of methods for brainstorming, prototyping, and presentation/marketing. <br/>
                    Motivate my team and  help them stay on task during time crunches.
                </p>

            <p class="job-title">
                <b>Creativity Counselor, Creative Design Methods</b> <br/>
                College of Design, U of M | Fall semesters 2015 to 2017
            </p>
                <p>
                    Mentor a team of students through a variety of methods for developing ideas and researching.<br/>
                    Lead group discussions on their experiences with these methods. <br/>
                    Teach students to culminate research and feedback into valuable information for iterating ideas.
                </p>

            <h3>Education</h3>
                <p class="job-title">
                    <b>Prime Digital Academy</b>  | 2019<br/>
                    Full Stack Software Engineering Certification
                </p>
                <p>
                    Activities and Societies: Public Speaking Practice, Hackers and Founders Meetup, Minnebar
                </p>

                <p class="job-title">
                    <b>University of Minnesota Twin Cities</b>  | 2013 <br/>
                    Scandinavian Studies Bachelor of Arts <br/>
                    Design Minor
                </p>
                <p>
                    Activities and Societies: Den Svenska Klubben (Swedish Club), study abroad in Iceland
                </p>

            <h3>Hobbies</h3>
                <p>
                    Restoring old furniture <br/>
                    Dancing West Coast Swing <br/>
                    Trips to the Boundary Waters <br/>
                    Learning new things:
                    <ul>
                        <li>Knitting</li>
                        <li>Languages</li>
                        <li>Crafting</li>
                    </ul>
                </p>

        </div>


    )
}

export default Resume;