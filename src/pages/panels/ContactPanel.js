import React, { Component } from 'react';
import profile from '../../design/img/linkein.jpg';


class ContactPanel extends Component {
    render(){
        return(
            <div>
            <div className="container col-md-3">
                <img src={profile} height="500px" alt=""/>
            </div>
            <div className="container col-md-9">
                <div className="subtext">
                <h1>CONTACT</h1>
                <p>Name: Havana Kaba</p>
                <p>Email: havana.kaba@live.com</p>
                <p>Phone: 647-780-0308</p>
                </div>
            </div>
        </div>
        );
    }
}

export default ContactPanel;