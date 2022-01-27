import React, { Component } from 'react';
import stock from '../../design/img/stock.jpg';

class HomePanel extends Component {
    render(){
        return(
            <div>
                <div className="container col-md-4">
                    <img src={stock} height="500px" alt=""/>
                </div>
                <div className="container col-md-8">
                    <div className="subtext">
                    <h1>WELCOME</h1>
                    <p>Welcome to my personal ePortfolio - a place for me, Havana Kaba, to release and distribute my various projects.</p>

                    <p>Currently a full-time full-stack software developer - specializing in web development and app creation. </p>

                    <p> Also fourth-year student studying toward a Bachelors of Technology in Software Development at Seneca College.</p>

                    <p>I possess a wide variety of both backend and frontend development skills in many coding languages and scripts. Previous experiences have also built up my design capabilities - I have much to share with the world! Check out my Github for coding examples.</p>

                    <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePanel;