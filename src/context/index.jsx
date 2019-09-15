import React from 'react';
import AppRoute from './../routes';

class AppContext extends React.Component {
    state = {
        user: {}
    };

    render(){
        return (
            <AppRoute/>
        )
    }
}

export default AppContext;