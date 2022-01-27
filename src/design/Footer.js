import React, { Component } from 'react';
import linkedin from './img/linkedin.png';
import github from './img/github.png';
import twitter from './img/twitter.png';

const linkStyle = {
    'list-style-type' : 'none'
};

class Footer extends Component {
    render(){
        return(
            <footer>
                <div class="row">
                    <div class="col-lg-12">
                        <hr />
                        <div class="col-md-9">
                        <ul class="nav navbar-nav">
                            <li>All Rights Reserved &copy; 2018 Havana Kaba</li>
                        </ul>
                        </div>
                        <div class="col-md-3">
                        <ul class="navbar-nav navbar-right" style={linkStyle} >
                            <li><a href="https://www.linkedin.com/in/havana-kaba" target="_blank"><img src={linkedin} height="20" width="20"/></a>&nbsp;&nbsp;</li>
                            <li><a href="https://twitter.com" target="_blank"><img src={twitter} height="20" width="20"/></a>&nbsp;&nbsp;</li>
                            <li><a href="https://github.com/HavanaKaba" target="_blank"><img src={github} height="20" width="20"/></a>&nbsp;&nbsp;</li>
                        </ul>
                        </div>
                    </div>
                </div>   
            </footer>    
        );
    }
}

export default Footer;