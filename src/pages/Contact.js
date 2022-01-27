import React, { Component } from 'react';
import MainContainer from '../design/MainContainer';
import ContactPanel from '../pages/panels/ContactPanel';

class Contact extends Component {
    render(){
        return(
            <MainContainer navbar='Contact'>
                <ContactPanel />
            </MainContainer>
        );
    }
}

export default Contact;
