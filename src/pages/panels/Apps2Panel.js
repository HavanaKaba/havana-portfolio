import React, { Component } from 'react';
import app1 from '../../design/img/site1.png';
import app2 from '../../design/img/app2.png';
import app3 from '../../design/img/app3.png';


class AppsPanel extends Component {
    render(){
        return(
            <div>
                <div className="row">
                    <div className="container col-md-6">
                        <a href="https://github.com/HavanaKaba/RobotControlGUI" target="_blank"><img src={app3} className="image" alt=""/></a>
                    </div>
                        <div className="container col-md-6">
                            <div className="subtext">
                            <p><b>Robot Control Panel</b></p>
                                <p>15/04/2018</p>
                                <p>Final Project</p>
                                <p>This project was created for a final assignment in a data communications course.</p>
                                <p>By the end of fourth semester, we had been tasked with an assignment to create a program that to control a robot through an obstacle course.</p>
                                <p>It was the first time I researched and created an executable program with a GUI interface, and learned many skills through its creation.</p>
                            </div>
                        </div> 
                </div>
            </div>
        );
    }
}

export default AppsPanel;