import React from 'react';
import './Resume.css';

const Resume = () => {

    return (
        <div class="container">

            <div>
                <div className="resume-heading" >
                    <h3>Skills</h3>
                </div>

                <div className="resume-body" >
                    <div className="dev-skills" >
                        <table>
                            <thead>
                                <tr> <th>Software</th> </tr>
                            </thead>
                            <tbody>
                                <tr> <td>React</td> <td>Redux</td> </tr>
                                <tr> <td>Sagas</td> <td>Javascript</td> </tr>
                                <tr> <td>jQuery</td> <td>Git</td> </tr>
                                <tr> <td>HTML</td> <td>CSS</td> </tr>
                                <tr> <td>Material UI</td> <td>Bootstrap</td> </tr>
                                <tr> <td>Node.js</td> <td>PostgreSQL</td> </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="design-skills" >
                        <table>
                            <thead>
                                <tr>
                                    <th>Design</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr> <td>CAD Design</td> <td>Solidworks, Rhino</td> </tr>
                                <tr> <td>Rendering</td> <td>Keyshot, Photoview 360</td> </tr>
                                <tr> <td>Adobe CC</td> <td>Illustrator, InDesign, Photoshop</td> </tr>
                                <tr> <td>Prototyping</td> <td>3D Printing, Woodworking,</td> </tr>
                                <tr> <td></td> <td>Thermoforming, Finishing</td> </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div>
                <div className="resume-heading" >
                    <h3>Experience</h3>
                </div>

                <div className="resume-body" >
                    <p class="job-title"> <b>Prime Digital Academy</b> | January 2019 to Present
                        <br/><b>Software Development Student</b></p>
                        <p className="job-description" >
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
                        <b>Regalo International</b> | July to October 2018
                        <br/><b>Industrial Designer</b> 
                    </p>
                        <p className="job-description" >
                            Researched baby products to develop new ideas and expand Regalo’s current offerings<br/> 
                            Sketched a large variety of ideas within a category for exploration and selection.<br/>
                            Developed concepts through sketching and CAD, taking user feedback into consideration. <br/>
                            Created presentations of final ideas for review and plan next steps in prototyping and manufacturing.
                        </p>

                    <p class="job-title">
                        <b>Madesmart</b> | February 2016 to February 2018
                        <br/><b>Product Designer</b>
                    </p>
                        <p className="job-description" >
                            Designed and developed new product concepts for home organization with the team.<br/> 
                            Revisited current product to redesign for efficiency and optimization.<br/>
                            Built prototypes of concepts for testing and presentation. <br/>
                            Researched trends, organize information into presentable material, and choose color palettes.
                        </p>

                    <p class="job-title"> 
                        <b>Bracketron, Inc</b> | February 2015 to February 2016
                        <br/><b>Senior Product Designer</b> | November 2015 to February 2016
                    </p>
                        <p className="job-description" >
                            Led design team in brainstorming sessions of new ideas and week-to-week project management<br/>
                            Developed and deployed process by which we carry ideas through from concept to final product
                        </p>

                    <p class="job-title">
                        <b>Product Designer</b> | February 2015 to November 2015
                    </p>
                        <p className="job-description" >
                            Designed and developed new product and packaging concepts <br/>
                            Rendered CAD model concepts and create prototypes to convey and test ideas
                        </p>
                </div>
            </div>

            <div>
                <div className="resume-heading" >
                    <h3>Volunteer</h3>
                </div>

                <div className="resume-body" >
                    <p class="job-title">
                        <b>College of Design, U of M</b> | Spring semesters 2013 to 2016, 2018
                        <br/> <b>Lab Instructor, Toy Product Design</b> 
                    </p>
                        <p className="job-description" >
                            Guided a team of students through the design process from brainstorming to presentation.<br/>
                            Taught my team a variety of methods for brainstorming, prototyping, and presentation/marketing. <br/>
                            Motivated my team and  help them stay on task during time crunches.
                        </p>

                    <p class="job-title">
                        <b>College of Design, U of M</b>| Fall semesters 2015 to 2017
                        <br/><b>Creativity Counselor, Creative Design Methods</b> 
                    </p>
                        <p className="job-description" >
                            Mentored a team of students through a variety of methods for developing ideas and researching.<br/>
                            Led group discussions on their experiences with these methods. <br/>
                            Taught students to culminate research and feedback into valuable information for iterating ideas.
                        </p>
                </div>
            </div>

            <div>
                <div className="resume-heading" >
                    <h3>Education</h3>
                </div>

                <div className="resume-body" >
                    <p class="job-title">
                        <b>Prime Digital Academy</b>  | 2019<br/>
                        Full Stack Software Engineering Certification
                    </p>
                    <p className="job-description" >
                        Activities and Societies: Public Speaking Practice, Hackers and Founders Meetup, Minnebar
                    </p>

                    <p class="job-title">
                        <b>University of Minnesota Twin Cities</b>  | 2013 <br/>
                        Scandinavian Studies Bachelor of Arts <br/>
                        Design Minor
                    </p>
                    <p className="job-description" >
                        Activities and Societies: Den Svenska Klubben (Swedish Club), study abroad in Iceland
                    </p>
                </div>
            </div>

            <div>
                <div className="resume-heading" >
                    <h3>Hobbies</h3>
                </div>

                <div className="resume-body" >
                    <p className="job-description" >
                        {/* Restoring old furniture <br/> */}
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
            </div>
        </div>
    )
}

export default Resume;