import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class MainContainer extends Component {
    render(){
        return(
            <div>
                <NavBar highlight = {this.props.navbar}/>
                <div className="maincontainer">
                {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default MainContainer;