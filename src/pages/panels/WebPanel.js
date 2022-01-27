import React, { Component } from 'react';
import site1 from '../../design/img/site1.png';
import site2 from '../../design/img/site2.png';
import site3 from '../../design/img/site3.png';
import site4 from '../../design/img/site4.png';

class WebPanel extends Component {
    render(){
        return(
            <div>
            <div className="row">
                <div className="container col-md-4">
                    <a href="/" target="_blank"><img src={site1} className="image" alt=""/></a>
                    <div className="subtext-web">
                    <p><b>PORTFOLIO</b></p>
                        <p>03/07/2018</p>
                        <p>Personal Project</p>
                        <p>This portfolio was designed from scratch, with an intention of both having an avenue to showcase my skills - and to create something that would itself show a combination of design and coding capabilities.</p>
                        <p>I am very pleased with this portfolio - I feel it gives an effective and desireable first-look at my web development capabilities.</p>
                        <p>The creation of this portfolio has greatly improved my understanding and skills using React and Bootstrap as well as the creation and development in the front-end "Component" MVVM model.</p>
                    </div>
                </div>
                <div className="container col-md-4">
                    <a href="https://mgr-app.herokuapp.com/" target="_blank"><img src={site2} className="image" alt=""/></a>
                    <div className="subtext-web">
                    <p><b>MY GAMES REVIEW</b></p>
                        <p>2019</p>
                        <p>This website is a capstone, independent project to completed by the end of my third year of University.</p>
                        <p>With two friends and colleagues, we are creating a gaming review and social media platform that will be deployed within the year.</p>
                        <p>This app is created with the use of AngularJS, created from scratch, using Oracle Database to manage our data and services. With this project, I have developed many skills beyond what was learned in the classroom, and will continue to do so as we tackle the website to further completion.</p>                
                    </div>
                </div>
                <div className="container col-md-4">
                <a href="mockup.png" target="_blank"><img src={site3} className="image" alt=""/></a>
                    <div className="subtext-web">
                    <p><b>SOLAR THEORY</b></p>
                        <p>TBD</p>
                        <p>Currently, this project is a work in progress.</p>
                        <p>It is currently still in the design stages, and will change as time progresses. Clicking on the above link will bring you to a mockup of the design - and initial elements can be seen.</p>
                        <p>This is a design for the developer blog of a personal video game project I am currently working on. The website will be completed once more of the game has been developed.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container col-md-4">
                    <a href="livework20.png" target="_blank"><img src={site4} className="image" alt=""/></a>
                    <div className="subtext-web">
                    <p><b>DESIGN MOCK UP</b></p>
                        <p>TBD</p>
                        <p>Personal Project</p>
                        <p>This is an ongoing build toward my portfolio.</p>
                        <p>It's being designed to display a few different skills: primarily displaying my design work and interactive VueJS skills.</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default WebPanel;