import React, { Component } from 'react';
import avatar from './img/avatar.png';
import ParticlesContainer from './particles/ParticlesContainer';

export default class MyProfile extends Component {
    render() {
        return (
            <div>
                <div id="particles-js">
                    <ParticlesContainer/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" id="myprofile">
                            <img src={avatar} alt=""/>
                            <p >Frontend Developer</p>
                            <a href="https://drive.google.com/open?id=1KBaTQqSdTAZ3tfFqBPinnoIyNvJ5VnMY">Download CV</a>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="text-banner">
                            <h2>THINK CREATIVE</h2>
                            <h3>AND MAKE INNOVATIVE DESIGN</h3>
                            <p>My name is Linh. I'm a Frontend Developer. Frontend developing is my fun and pleasure. It's not only the job. In my free time, I like to learn and test my project. I have the ability to for Team-Work as well as work independently, under pressure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


