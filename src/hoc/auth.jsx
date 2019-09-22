import React from 'react';
import AppContext from './../context/app-context';

const Auth = (ComposedComponent) => {
    class AuthenticationCheck extends React.Component {
        static contextType = AppContext;

        componentDidMount() {
            const user = localStorage.getItem('user');
            let userObj = {};
            if (!user) {
                userObj = {name: 'FT', company: 'PS19'};
                localStorage.setItem('user', JSON.stringify(userObj))
            }

            // this.context.handle
            console.log(JSON.parse(user));
        };

        render() {
            return (
                <ComposedComponent/>
            )

        }
    }

    return AuthenticationCheck;
};

export default Auth;