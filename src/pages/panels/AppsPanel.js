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
                        <a href="https://github.com/HavanaKaba/AssemblyLineOrder" target="_blank"><img src={app2} className="image" alt=""/></a>
                    </div>
                    <div className="container col-md-6">
                        <div className="subtext">
                        <p><b>BTP300 - OOP Principles</b></p>
                            <p>01/04/2018</p>
                            <p>Final Project</p>
                            <p>This project was created for a final assignment in a C++ object-oriented programming course.</p>
                            <p>Using a cumulative semester's acquired knowledge on creating object-oriented C++. This project simulates an assembly, which fulfills customer order using processors that performs many tasks, including quality control.</p>
                            <p>This project, being as big a task as it was, was more difficult to begin than it was to finish. The beginning stages, particularly planning before any amount of code was started was most challenging.</p>
                            <p>The outcome of this project was excellent: garnering a 97% final grade.</p>
                            <p>By adhering to the concepts and skills learned throughout the semester, I managed to create a clean, descriptive and robust code that fulfilled its purpose and more.</p>
                            <p>In particular, by focusing on each concept individually - I created modules that set up an excellent working environment that paid off in the end.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppsPanel;