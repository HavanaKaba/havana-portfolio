import React, { Component } from 'react';
import MainContainer from '../design/MainContainer';
import HomePanel from '../pages/panels/HomePanel';

class Home extends Component {
    render(){
        return(
            <MainContainer navbar='Home'>
                <HomePanel />
            </MainContainer>
        );
    }
}

export default Home;
