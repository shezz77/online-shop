import HomeComponent from '../views/home';
import Auth from './../hoc/auth';

export const routes = [
    {
        path: '/',
        component: Auth(HomeComponent)
    },
    {
        redirect: true,
        path: "*",
        to: "/"
    }

];