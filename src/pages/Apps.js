import React, { Component } from 'react';
import MainContainer from '../design/MainContainer';
import AppsPanel from '../pages/panels/AppsPanel';
import App2Panel from '../pages/panels/Apps2Panel';

class Apps extends Component {
    render(){
        return(
            <MainContainer navbar='Apps'>
                <React.Fragment>
                <AppsPanel />
                <App2Panel />
                </React.Fragment>
            </MainContainer>
        );
    }
}

export default Apps;
