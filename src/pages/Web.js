import React, { Component } from 'react';
import MainContainer from '../design/MainContainer';
import WebPanel from '../pages/panels/WebPanel';

class Web extends Component {
    render(){
        return(
            <MainContainer navbar='Web'>
                <WebPanel />
            </MainContainer>
        );
    }
}

export default Web;
