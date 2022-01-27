import React, { Component } from 'react';
import navimg from './img/navimg.png';
import { Link } from 'react-router-dom';

const navStyle = {
    'background-color': '#ffbfb7',
    'font-family': 'Century Gothic, CenturyGothic, AppleGothic, sans-serif',
    'color': '#828282',
    'letter-spacing': '3px',
    'font-size': '12pt',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'padding-right': '10%',
    'margin': '0px',
    'top' : '0',
    'width' : '100%',
    'position' : 'absolute',
    'height' : '75px',
    'z-index' : '0'
};

class NavBar extends Component {
    render(){
        return(
            <div>
            <nav className="navbar" style={navStyle}>
                <ul className="nav navbar-nav navbar-right">
                    <li className={(this.props.highlight === 'Home' ? 'active' : '')}><Link to="/">HOME</Link></li>
                    <li className={(this.props.highlight === 'Web' ? 'active' : '')}><Link to="/web">WEB</Link></li>
                    <li className={(this.props.highlight === 'Apps' ? 'active' : '')}><Link to="/apps">APPS</Link></li>
                    <li className={(this.props.highlight === 'Contact' ? 'active' : '')}><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
            <div className="mycontainer">
                    <div id="navimg">
                        <div id="navimg2">
                            <img src={navimg} height="150" width="150"/>
                        </div>
                    </div>
                    <div id="myheader">
                        <h1><b><i>havana codes</i></b></h1>
                        <p id="sig">coding. web development. app creation.</p>
                    </div>
                    <br /><br />
                    <hr />
            </div>
            </div>
        );
    }
}

export default NavBar;