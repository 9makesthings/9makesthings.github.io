import React, {Component} from 'react';
import './PaddleNorth.css';

class PaddleNorth extends Component {

    state = {
        slideIndex: 1,
    }

    // Next/previous controls
    // plusSlides = (n) => {
    //     this.showSlides(
    //         this.setState({
    //             ...this.state, 
    //             slideIndex: this.state.slideIndex + n,
    //         })
    //     );
    // }

    // Thumbnail image controls
    // currentSlide = (n) => {
    //     this.showSlides(
    //         this.setState({
    //             ...this.state, 
    //             slideIndex: n,
    //         })
    //     );
    // }

    nextSlide = () => {
        let slides = document.getElementsByClassName("mySlides");
        let n = this.state.slideIndex;

        if (n > slides.length) {
            this.setState({
                ...this.state, 
                slideIndex: 1,
            })
        } else if (n < 1) {
            this.setState({
                ...this.state, 
                slideIndex: slides.length,
            })
        } else {
            this.setState({
                ...this.state, 
                slideIndex: n + 1,
            })
        }
    }

    prevSlide = () => {
        let slides = document.getElementsByClassName("mySlides");
        let n = this.state.slideIndex;

        if (n > slides.length) {
            this.setState({
                ...this.state, 
                slideIndex: 1,
            })
        } else if (n < 1) {
            this.setState({
                ...this.state, 
                slideIndex: slides.length,
            })
        } else {
            this.setState({
                ...this.state, 
                slideIndex: n - 1,
            })
        }
    }

    render() {
        const slideIndex = this.state.slideIndex;
        return(
            <div class="slide-container">

                {function(){
                    switch (slideIndex) {
                    case 1:
                        return(
                        <div class="mySlides">
                            <div class="numbertext">1 / 6</div>
                            <img src="images/screenshots/home.png" alt="Homepage" />
                        </div>);
                    case 2:
                        return(
                        <div class="mySlides">
                            <div class="numbertext">2 / 6</div>
                            <img src="images/screenshots/step-one.png" alt="Step One" />
                        </div>);
                    default:
                        break;
                }}}
                {/* <div class="mySlides">
                    <div class="numbertext">1 / 6</div>
                    <img src="images/screenshots/home.png" alt="Homepage" />
                </div>

                <div class="mySlides">
                    <div class="numbertext">2 / 6</div>
                    <img src="images/screenshots/step-one.png" alt="Step One" />
                </div>

                <div class="mySlides">
                    <div class="numbertext">3 / 6</div>
                    <img src="images/screenshots/step-two.png" alt="Step Two" />
                </div>

                <div class="mySlides">
                    <div class="numbertext">4 / 6</div>
                    <img src="images/screenshots/step-three.png" alt="Step Three" />
                </div>

                <div class="mySlides">
                    <div class="numbertext">5 / 6</div>
                    <img src="images/screenshots/step-four.png" alt="Step Four" />
                </div>

                <div class="mySlides">
                    <div class="numbertext">6 / 6</div>
                    <img src="images/screenshots/save-trip.png" alt="Save Trip" />
                </div> */}

                {/* <!-- Next and previous buttons --> */}
                <button class="prev" onClick={this.prevSlide} >
                    <i class="material-icons">navigate_before</i>
                </button>
                <button class="next" onClick={this.nextSlide} >
                    <i class="material-icons">navigate_next</i>
                </button>

                {/* <!-- Image text --> */}
                {/* <div class="caption-container">
                    <p id="caption"></p>
                </div> */}

                {/* <!-- Thumbnail images --> */}
                {/* <div class="row">
                    <div class="column">
                        <img class="demo cursor" src="img_woods.jpg" onclick="currentSlide(1)" alt="The Woods" />
                    </div>

                    <div class="column"> 
                        <img class="demo cursor" src="img_5terre.jpg" onclick="currentSlide(2)" alt="Cinque Terre" />
                    </div>

                    <div class="column">
                        <img class="demo cursor" src="img_mountains.jpg" onclick="currentSlide(3)" alt="Mountains and fjords" />
                    </div>

                    <div class="column">
                        <img class="demo cursor" src="img_lights.jpg" onclick="currentSlide(4)" alt="Northern Lights" />
                    </div>

                    <div class="column">
                        <img class="demo cursor" src="img_nature.jpg" onclick="currentSlide(5)" alt="Nature and sunrise" />
                    </div> 

                    <div class="column">
                        <img class="demo cursor" src="img_snow.jpg" onclick="currentSlide(6)" alt="Snowy Mountains" />
                    </div>
                </div> */}
            </div>

        )
    }
}

export default PaddleNorth;