import React from 'react';
import AppRoute from './../routes';
import {AppModel} from "./models/app";
import AppCntxt from './app-context';

class AppContext extends React.Component {
    state = {...AppModel};

    handleUpdateMainState = newState => this.setState({...newState});

    render(){
        return (
            <AppCntxt.Provider
                value={
                    {
                        ...this.state,
                        handleUpdateMainState:this.handleUpdateMainState
                    }
                }
            >
                <AppRoute/>
            </AppCntxt.Provider>
        )
    }
}

export default AppContext;